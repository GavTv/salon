import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Catalog from "./pages/Catalog";
import Index from "./pages/Index";
import Hairdressing from "./pages/Hairdressing";
import Cosmetology from "./pages/Cosmetology";
import LPGMassage from "./pages/LPGMassage";
import Promotions from "./pages/Promotions";
import Contacts from "./pages/Contacts";
import Prices from "./pages/Prices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/services" element={<Index />} />
          <Route path="/hairdressing" element={<Hairdressing />} />
          <Route path="/cosmetology" element={<Cosmetology />} />
          <Route path="/lpg-massage" element={<LPGMassage />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
