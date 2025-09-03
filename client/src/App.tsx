import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import NotFound from "@/pages/not-found";

// Função para forçar tema claro
function forceTheme() {
  // Remove qualquer classe dark
  document.documentElement.classList.remove('dark');
  document.body.classList.remove('dark');
  
  // Força classe light
  document.documentElement.classList.add('light');
  document.body.classList.add('light');
  
  // Define color-scheme como light
  document.documentElement.style.colorScheme = 'light';
}

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  useEffect(() => {
    // Força tema claro na inicialização
    forceTheme();
    
    // Observa mudanças na classe do documento e força tema claro
    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains('dark')) {
        forceTheme();
      }
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    // Também monitora mudanças de preferência do sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => forceTheme();
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
