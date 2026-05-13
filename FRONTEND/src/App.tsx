import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "./pages/NotFound.tsx";
import { SiteLayout } from "./components/layout/SiteLayout";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Blog from "./pages/Blog";
import VidaEstudiantil from "./pages/VidaEstudiantil";
import DocentesGlobal from "./pages/DocentesGlobal";
import Auth from "./pages/Auth";
import CarreraLayout from "./pages/carrera/CarreraLayout";
import General from "./pages/carrera/General";
import Materias from "./pages/carrera/Materias";
import Perfil from "./pages/carrera/Perfil";
import Docentes from "./pages/carrera/Docentes";
import Proyectos from "./pages/carrera/Proyectos";
import Graduados from "./pages/carrera/Graduados";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/vida-estudiantil" element={<VidaEstudiantil />} />
            <Route path="/docentes" element={<DocentesGlobal />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/carrera/:slug" element={<CarreraLayout />}>
              <Route index element={<General />} />
              <Route path="materias" element={<Materias />} />
              <Route path="perfil" element={<Perfil />} />
              <Route path="docentes" element={<Docentes />} />
              <Route path="proyectos" element={<Proyectos />} />
              <Route path="graduados" element={<Graduados />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
