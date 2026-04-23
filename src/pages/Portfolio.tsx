import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/appData';

const categories = ['All', 'Business', 'Game Zone', 'Cafe', 'Gym', 'Booking', 'Salon'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            My <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of premium websites I've built for small businesses and service providers near Surat.
          </p>
        </header>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'glass text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group glass rounded-[2rem] overflow-hidden border-white/5 hover:border-primary/50 transition-all flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-primary w-14 h-14 rounded-full flex items-center justify-center animate-pulse">
                        <ExternalLink />
                    </button>
                  </div>
                </div>
                <div className="p-8">
                   <div className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{project.category}</div>
                   <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary transition-colors">{project.title}</h3>
                   <a
                    href={project.demoUrl}
                    className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors"
                  >
                    View Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-bold">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
