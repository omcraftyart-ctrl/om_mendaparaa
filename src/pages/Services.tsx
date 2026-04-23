import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/appData';

export default function Services() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Professional Website <span className="text-gradient">Services</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I offer specialized web development and design services tailored to help local businesses thrive in the digital age.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-primary/50 transition-all group flex flex-col"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
              <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>
              <Link
                to="/contact"
                className="w-full bg-white/5 hover:bg-primary text-white font-bold py-4 rounded-xl text-center flex items-center justify-center gap-2 transition-all group/btn"
              >
                Get Quote
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-24 glass p-12 rounded-[2rem] border-white/10 relative overflow-hidden text-center md:text-left">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl font-black text-white mb-4">Don't see what you're looking for?</h3>
                <p className="text-gray-400 max-w-xl">
                  I handle all kinds of custom requests. Whether you need a simple blog or a complex integrated SaaS dashboard, let's talk and make it happen.
                </p>
              </div>
              <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full font-black shadow-xl shadow-primary/20 shrink-0">
                 Custom Request
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
