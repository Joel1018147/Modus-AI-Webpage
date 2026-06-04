import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { trackPageView } from "@/lib/tiktok";
import TikTokDebugPanel from "@/components/dev/TikTokDebugPanel";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Details from "@/pages/details";
import Launch from "@/pages/launch";
import { LAUNCH_PATH } from "@/data/launch";

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();

  // Fire a TikTok page view on every SPA route change (the base snippet only
  // fires once on the initial full-page load).
  useEffect(() => {
    trackPageView();
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/details" component={Details} />
      <Route path={LAUNCH_PATH} component={Launch} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
          <TikTokDebugPanel />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
