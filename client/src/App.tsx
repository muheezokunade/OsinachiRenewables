import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import CookieConsent from "@/components/CookieConsent";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import OurTeam from "@/pages/OurTeam";
import Careers from "@/pages/Careers";
import NewsBlog from "@/pages/NewsBlog";
import Impact from "@/pages/Impact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiesPolicy from "@/pages/CookiesPolicy";
import TermsConditions from "@/pages/TermsConditions";
import NotFound from "@/pages/not-found";
import PortfolioProject from "@/pages/PortfolioProject";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/ourteam" component={OurTeam} />
      <Route path="/careers" component={Careers} />
      <Route path="/newsblog" component={NewsBlog} />
      <Route path="/impact" component={Impact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/cookies-policy" component={CookiesPolicy} />
      <Route path="/terms-conditions" component={TermsConditions} />
      <Route path="/portfolio/:slug" component={PortfolioProject} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Router />
          <CookieConsent />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
