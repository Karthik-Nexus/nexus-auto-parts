import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import UsedEngine from "@/pages/UsedEngine";
import ProductListing from "@/pages/ProductListing";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/used-engine" component={UsedEngine} />
      <Route path="/products" component={ProductListing} />
      <Route component={NotFound} />
    </Switch>
  );
}

import Chatbot from "@/components/Chatbot";
import CallWidget from "@/components/CallWidget";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <Chatbot />
        <CallWidget />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
