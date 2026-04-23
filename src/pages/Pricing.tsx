import { useNavigate } from 'react-router-dom';
import { Check, Zap, Rocket, Star } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    name: 'Starter',
    price: '₹5000',
    description: 'Perfect for small local businesses or personal portfolios.',
    features: [
      '1 Page Website',
      'Mobile Responsive',
      'WhatsApp Button Integration',
      'Contact Form',
      'Standard Support',
      '3 Days Delivery'
    ],
    icon: Zap,
    color: 'blue'
  },
  {
    name: 'Growth',
    price: '₹8000',
    description: 'Ideal for established businesses and cafes needing multiple pages.',
    features: [
      'Up to 5 Pages',
      'Advanced Image Gallery',
      'Basic SEO Setup',
      'Responsive Design',
      '1 Month Free Support',
      '7 Days Delivery',
      'Social Media Integration'
    ],
    icon: Rocket,
    color: 'primary',
    recommended: true
  },
  {
    name: 'Premium',
    price: '₹12000',
    description: 'The ultimate solution with custom booking and advanced features.',
    features: [
      'Unlimited Pages',
      'Integrated Booking System',
      'Advanced SEO Strategy',
      'Priority Support',
      'Speed Optimization',
      '14 Days Delivery',
      'Custom Logic/Web App'
    ],
    icon: Star,
    color: 'cyan'
  }
];

export default function Pricing() {
  const navigate = useNavigate();

  const handleChoosePlan = (planName: string) => {
    navigate(`/contact?plan=${encodeURIComponent(planName)}`);
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Affordable <span className="text-gradient">Pricing</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your business growth. Transparent pricing with no hidden costs.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative glass p-10 rounded-[2.5rem] border-white/5 flex flex-col ${
                plan.recommended ? 'border-primary ring-2 ring-primary/20 bg-primary/5' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <plan.icon size={28} />
                </div>
                <h2 className="text-2xl font-black text-white mb-2">{plan.name}</h2>
                <div className="text-4xl font-black text-white mb-4">{plan.price}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="text-green-500 w-5 h-5 mt-0.5 shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleChoosePlan(plan.name)}
                className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${
                  plan.recommended
                    ? 'bg-primary hover:bg-primary-dark text-white shadow-primary/20'
                    : 'bg-white/5 hover:bg-white/10 text-white'
                }`}
              >
                Choose {plan.name} Plan
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <p className="text-gray-500 text-sm">
             All plans include basic domain setup and one-time project delivery. <br />
             Need something special? <span className="text-primary cursor-pointer hover:underline" onClick={() => navigate('/contact')}>Contact me for custom quotes.</span>
           </p>
        </div>
      </div>
    </div>
  );
}
