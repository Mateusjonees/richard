import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DireitoConsumidor from "./pages/DireitoConsumidor";
import ContratosNegociacoes from "./pages/ContratosNegociacoes";
import AcoesJudiciais from "./pages/AcoesJudiciais";
import FAQSchema from "./components/FAQSchema";

const queryClient = new QueryClient();

const App = () => (
  <>
    <FAQSchema />
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/direito-consumidor" element={<DireitoConsumidor />} />
            <Route path="/contratos-negociacoes" element={<ContratosNegociacoes />} />
            <Route path="/acoes-judiciais" element={<AcoesJudiciais />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </>
);

export default App;
