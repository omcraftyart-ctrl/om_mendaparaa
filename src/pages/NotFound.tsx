import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <h1 className="text-[150px] font-black text-white/5 leading-none select-none">404</h1>
          <p className="text-4xl font-bold text-white mt-[-60px]">Page Not Found</p>
        </motion.div>
        
        <p className="text-gray-400 mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-primary/20"
        >
          <Home className="w-5 h-5" />
          Back to Home
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
