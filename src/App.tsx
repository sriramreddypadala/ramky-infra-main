
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, Suspense, useState } from 'react';
import Welcome from "./components/Welcome";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import VideoTest from "./pages/VideoTest";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DamacProjects from "./pages/DamacProjects";
import DamacProjectDetail from "./pages/DamacProjectDetail";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  // Handle navigation from welcome page
  const handleEnter = () => {
    setShowWelcome(false);
    // Store in session storage to remember the user has seen the welcome
    sessionStorage.setItem('hasSeenWelcome', 'true');
  };
  
  // Check if we should show welcome on initial load
  useEffect(() => {
    // Only check on the very first render
    if (isInitialLoad) {
      const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome') === 'true';
      setShowWelcome(!hasSeenWelcome);
      setIsInitialLoad(false);
      
      // Set a flag that we've loaded the page at least once
      sessionStorage.setItem('hasInitialized', 'true');
    }
  }, [isInitialLoad]);
  
  // Handle page refresh - show welcome again
  useEffect(() => {
    // Check if this is a page refresh using performance API (modern browsers)
    const isPageRefresh = () => {
      try {
        const navEntries = performance.getEntriesByType('navigation');
        if (navEntries.length > 0) {
          const navEntry = navEntries[0] as PerformanceNavigationTiming;
          return navEntry.type === 'reload' || navEntry.type === 'back_forward';
        }
      } catch (e) {
        console.warn('Performance Navigation Timing API not supported');
      }
      
      // Fallback for browsers that don't support the Navigation Timing API
      return performance.navigation?.type === 1; // 1 means page was refreshed
    };
    
    if (isPageRefresh()) {
      // Clear the flag on refresh
      sessionStorage.removeItem('hasSeenWelcome');
      setShowWelcome(true);
    }
    
    // Clean up any existing unload flag
    const wasUnloading = sessionStorage.getItem('wasUnloading') === 'true';
    if (wasUnloading) {
      sessionStorage.removeItem('hasSeenWelcome');
      sessionStorage.removeItem('wasUnloading');
      setShowWelcome(true);
    }
    
    const handleBeforeUnload = () => {
      // Set a flag that we're about to unload
      sessionStorage.setItem('wasUnloading', 'true');
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <Suspense fallback={<div className="w-screen h-screen flex items-center justify-center">Loading...</div>}>
      <Routes location={location}>
        <Route 
          path="/" 
          element={
            showWelcome ? 
            <Welcome onEnter={handleEnter} /> : 
            <Navigate to="/home" replace />
          } 
        />
        <Route path="/home" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/damac" element={<DamacProjects />} />
        <Route path="/damac/:id" element={<DamacProjectDetail />} />
        <Route path="/video-test" element={<VideoTest />} />
        <Route path="/index" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
