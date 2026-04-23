import { ReactNode } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingActions from './components/common/FloatingActions';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy load or import pages
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import FreeDemo from './pages/FreeDemo';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

const PageWrapper = ({ children, id }: { children: ReactNode; id: string }) => (
  <motion.div
    key={id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      <ScrollToTop />
      <Navbar />
      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<PageWrapper id="home"><Home /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper id="services"><Services /></PageWrapper>} />
            <Route path="/portfolio" element={<PageWrapper id="portfolio"><Portfolio /></PageWrapper>} />
            <Route path="/pricing" element={<PageWrapper id="pricing"><Pricing /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper id="about"><About /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper id="contact"><Contact /></PageWrapper>} />
            <Route path="/free-demo" element={<PageWrapper id="free-demo"><FreeDemo /></PageWrapper>} />
            <Route path="/testimonials" element={<PageWrapper id="testimonials"><Testimonials /></PageWrapper>} />
            <Route path="/faq" element={<PageWrapper id="faq"><FAQ /></PageWrapper>} />
            <Route path="*" element={<PageWrapper id="notfound"><NotFound /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
