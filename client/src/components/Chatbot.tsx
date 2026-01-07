import { useState, useEffect, useRef, useMemo } from "react";
import { MessageCircle, X, Phone, MessageSquare, ChevronRight } from "lucide-react";
import { useChatbot } from "@/context/ChatbotContext";
import { getMakes, getModels, getYears, getParts } from "@/data/vehicleData";

type Step = 'year' | 'make' | 'model' | 'part' | 'summary';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: number;
}

export default function Chatbot() {
  const { isOpen, closeChatbot, toggleChatbot } = useChatbot();
  const [currentStep, setCurrentStep] = useState<Step>('year');
  const [messages, setMessages] = useState<Message[]>([]);
  const [selections, setSelections] = useState({ year: '', make: '', model: '', part: '' });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Vehicle data
  const years = useMemo(() => getYears(), []);
  const makes = useMemo(() => getMakes(), []);
  const models = useMemo(() => selections.make ? getModels(selections.make) : [], [selections.make]);
  const parts = useMemo(() => getParts(), []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initChat();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initChat = () => {
    setMessages([
      {
        id: '1',
        type: 'bot',
        content: 'What year is your vehicle?',
        timestamp: Date.now()
      }
    ]);
  };

  const getOptions = (): string[] => {
    switch (currentStep) {
      case 'year':
        return years.slice(0, 20); // Show recent 20 years for better UX
      case 'make':
        return makes;
      case 'model':
        return models;
      case 'part':
        return parts;
      default:
        return [];
    }
  };

  const handleSelect = (value: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: value,
      timestamp: Date.now()
    };

    const updatedMessages = [...messages, userMessage];

    let botResponse = '';
    let nextStep: Step = currentStep;
    let newSelections = { ...selections };

    switch (currentStep) {
      case 'year':
        newSelections.year = value;
        setSelections(newSelections);
        botResponse = `Great! What is the make of your ${value} vehicle?`;
        nextStep = 'make';
        break;
      case 'make':
        newSelections.make = value;
        setSelections(newSelections);
        botResponse = `Perfect! What model is your ${value}?`;
        nextStep = 'model';
        break;
      case 'model':
        newSelections.model = value;
        setSelections(newSelections);
        botResponse = 'What part are you looking for?';
        nextStep = 'part';
        break;
      case 'part':
        newSelections.part = value;
        setSelections(newSelections);
        botResponse = `Thank you! Here's a summary of your request:\n\n🚗 Vehicle: ${selections.year} ${selections.make} ${value}\n🔧 Part: ${value}\n\nOur team will contact you shortly with a quote. You can also call us at (866) 212-2276!`;
        nextStep = 'summary';
        break;
    }

    setTimeout(() => {
      setMessages([...updatedMessages, {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: Date.now()
      }]);
      setCurrentStep(nextStep);
    }, 400);

    setMessages(updatedMessages);
  };

  const resetChat = () => {
    setCurrentStep('year');
    setSelections({ year: '', make: '', model: '', part: '' });
    setMessages([]);
    initChat();
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(194, 30, 35, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 15px rgba(194, 30, 35, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(194, 30, 35, 0);
          }
        }
        @keyframes rotateShake {
          0% { transform: rotate(0deg) scale(0.95); }
          3% { transform: rotate(15deg) scale(1); }
          6% { transform: rotate(-15deg) scale(1); }
          9% { transform: rotate(15deg) scale(1); }
          12% { transform: rotate(-15deg) scale(1); }
          15% { transform: rotate(0deg) scale(0.95); }
          100% { transform: rotate(0deg) scale(0.95); }
        }
        .chat-btn-pulse {
            animation: pulse 2s infinite, rotateShake 3s ease-in-out infinite;
        }
        .chat-btn-pulse:hover {
            animation: none;
        }
      `}</style>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-[4px] z-50 transition-opacity"
          onClick={closeChatbot}
        />
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 w-full h-full md:max-w-[384px] md:max-h-[512px] md:bottom-24 md:right-8 bg-[linear-gradient(to_bottom,rgba(20,20,20,0.95),rgba(30,10,10,0.95))] border border-[#c21e23]/40 md:rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col z-[51] backdrop-blur-md overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 text-slate-100 font-sans ring-1 ring-[#c21e23]/20">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700/40 bg-black/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c21e23] flex items-center justify-center text-white shadow">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base">Auto Parts Finder</h3>
                <p className="text-sm text-slate-400/80">Find your perfect part now</p>
              </div>
            </div>
            <button
              onClick={closeChatbot}
              className="w-8 h-8 rounded-full bg-slate-700/40 hover:bg-[#c21e23] text-slate-400 hover:text-white flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow ${msg.type === 'user'
                    ? 'bg-[#c21e23] text-white rounded-br-none'
                    : 'bg-slate-800/70 text-slate-100 rounded-bl-none border border-slate-700/50'
                    }`}
                >
                  <p className="whitespace-pre-line">
                    {msg.content}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Options */}
          {currentStep !== 'summary' && (
            <div className="p-4 border-t border-slate-700/40 bg-black/20">
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                {getOptions().map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="px-3 py-1.5 rounded-full bg-slate-700/40 hover:bg-[#c21e23] text-sm text-slate-200 hover:text-white transition border border-slate-600/30 hover:border-[#c21e23] flex items-center gap-1"
                  >
                    {option}
                    <ChevronRight className="w-3 h-3 opacity-60" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Summary Actions */}
          {currentStep === 'summary' && (
            <div className="p-4 border-t border-slate-700/40 bg-black/20">
              <button
                onClick={resetChat}
                className="w-full py-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-slate-200 text-sm font-medium transition"
              >
                Start New Search
              </button>
            </div>
          )}

          {/* Contact Bar */}
          <div className="px-4 py-3 border-t border-slate-700/40 bg-black/30 flex items-center gap-3">
            <a
              href="tel:8662122276"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#c21e23] hover:bg-[#a01822] text-white text-sm font-medium transition"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <a
              href="sms:8662122276"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-slate-200 text-sm font-medium transition"
            >
              <MessageSquare className="w-4 h-4" />
              Text Us
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChatbot}
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#c21e23] text-white flex items-center justify-center shadow-lg z-40 transition-all duration-300 hover:scale-110 hover:bg-[#a01822] border-4 border-white/20 ${!isOpen ? 'chat-btn-pulse' : ''}`}
        data-testid="button-chatbot"
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
      </button>
    </>
  );
}
