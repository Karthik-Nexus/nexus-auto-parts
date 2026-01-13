import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ChatbotProvider } from "@/context/ChatbotContext";
import Home from "@/pages/Home";
import Engine from "@/pages/Engine";
import NotFound from "@/pages/not-found";
import Chatbot from "@/components/Chatbot";
import CallWidget from "@/components/CallWidget";
import Payment from "@/pages/Payment";
import ThankYou from "@/pages/ThankYou";
import Transmission from "@/pages/Transmission";
import SteeringColumn from "@/pages/SteeringColumn";
import InstrumentCluster from "@/pages/InstrumentCluster";
import AbsModule from "@/pages/AbsModule";
import TransferCase from "@/pages/TransferCase";
import TurboCharger from "@/pages/TurboCharger";
import Differential from "@/pages/Differential";
import AxleShaft from "@/pages/AxleShaft";
import Alternator from "@/pages/Alternator";
import About from "@/pages/About";
import Warranty from "@/pages/Warranty";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import TrackOrder from "@/pages/TrackOrder";
import HelpCenter from "@/pages/HelpCenter";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/warranty" component={Warranty} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/faq" component={FAQ} />
      <Route path="/track" component={TrackOrder} />
      <Route path="/help" component={HelpCenter} />
      <Route path="/engine" component={Engine} />
      <Route path="/transmission" component={Transmission} />
      <Route path="/steering-column" component={SteeringColumn} />
      <Route path="/instrument-cluster" component={InstrumentCluster} />
      <Route path="/abs-module" component={AbsModule} />
      <Route path="/transfer-case" component={TransferCase} />
      <Route path="/turbo-charger" component={TurboCharger} />
      <Route path="/differential" component={Differential} />
      <Route path="/axle-shaft" component={AxleShaft} />
      <Route path="/alternator" component={Alternator} />
      <Route path="/alternator" component={Alternator} />
      <Route path="/payment" component={Payment} />
      <Route path="/thank-you" component={ThankYou} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChatbotProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
          <Chatbot />
          <CallWidget />
        </TooltipProvider>
      </ChatbotProvider>
    </QueryClientProvider>
  );
}

export default App;
