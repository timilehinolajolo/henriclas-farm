import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Other',
    message: ''
  });

  // Auto-fill the subject if they clicked a specific product on the Products page
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const subjectParam = params.get('subject');
    
    if (subjectParam) {
      const options = ['Catfish', 'Grasscutter', 'Rabbit', 'Poultry / Eggs', 'Feed Mill', 'Other'];
      const matchedOption = options.find(opt => 
        opt.toLowerCase().includes(subjectParam.toLowerCase())
      );
      if (matchedOption) {
        setFormData(prev => ({ ...prev, subject: matchedOption }));
      }
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission goes here
    console.log("Form Submitted", formData);
    alert("Thank you for your enquiry. We will get back to you shortly.");
  };

  return (
    <main className="relative bg-brand-bg text-brand-primary min-h-screen overflow-hidden selection:bg-brand-accent selection:text-white pt-24 md:pt-32 flex flex-col">
      
      {/* --- PAGE HEADER --- */}
      <section className="relative px-6 md:px-12 lg:px-24 pb-16 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-brand-accent text-sm uppercase tracking-[0.2em] font-bold block mb-6">
            Get in touch
          </span>
          <h1 className="font-fraunces text-6xl md:text-8xl font-medium leading-[0.9] tracking-tight mb-8">
            Let's <span className="text-brand-accent italic pr-8">talk.</span>
          </h1>
          <p className="font-work text-lg md:text-xl text-brand-muted font-light max-w-2xl">
            Call, WhatsApp, or send an enquiry below — we usually respond the same day.
          </p>
        </motion.div>
      </section>

      {/* --- CONTACT CONTENT & FORM --- */}
      <section className="relative px-6 md:px-12 lg:px-24 pb-32 max-w-7xl mx-auto w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-12"
          >
            {/* Address */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold mb-4 flex items-center gap-3">
                <span className="text-lg">📍</span> Location
              </h3>
              <p className="font-work text-lg leading-relaxed text-brand-primary mb-4">
                Behind Adelodun Bus-Stop, <br />
                Isefun Ayobo, Ipaja, <br />
                Lagos State.
              </p>
              <a 
                href="https://maps.google.com/?q=Isefun+Ipaja+Lagos" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors"
              >
                Get directions <span className="text-lg leading-none">→</span>
              </a>
            </div>

            <div className="h-[1px] w-full bg-brand-surface/20"></div>

            {/* Phone & WhatsApp */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold mb-4 flex items-center gap-3">
                <span className="text-lg">☎</span> Direct Lines
              </h3>
              <div className="flex flex-col space-y-2 font-work text-lg text-brand-primary mb-6">
                <a href="tel:07034498274" className="hover:text-brand-accent transition-colors">0703 449 8274</a>
                <a href="tel:07034507108" className="hover:text-brand-accent transition-colors">0703 450 7108</a>
              </div>
              
              <a 
                href="https://wa.me/2347034498274" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#25D366] hover:opacity-80 transition-opacity font-bold"
              >
                <span className="text-lg leading-none">💬</span> Chat with us on WhatsApp
              </a>
            </div>

            <div className="h-[1px] w-full bg-brand-surface/20"></div>

            {/* Email & Socials */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold mb-4 flex items-center gap-3">
                <span className="text-lg">✉</span> Digital
              </h3>
              <a href="mailto:henriclasfarms@gmail.com" className="font-work text-lg text-brand-primary hover:text-brand-accent transition-colors block mb-6">
                henriclasfarms@gmail.com
              </a>
              <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
                <a href="#" className="text-brand-muted hover:text-brand-primary transition-colors">Instagram</a>
                <a href="#" className="text-brand-muted hover:text-brand-primary transition-colors">Facebook</a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 bg-brand-surface/5 p-8 md:p-12 border border-brand-surface/10"
          >
            <h2 className="font-fraunces text-3xl mb-10 text-brand-primary">Send an enquiry</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Full Name */}
              <div className="relative group">
                <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-brand-surface/60 mb-2">Full name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-brand-surface/30 py-3 text-brand-primary font-work text-lg focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Phone Number */}
              <div className="relative group">
                <label htmlFor="phone" className="block font-mono text-xs uppercase tracking-widest text-brand-surface/60 mb-2">Phone number</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-brand-surface/30 py-3 text-brand-primary font-work text-lg focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="0801 234 5678"
                />
              </div>

              {/* Dropdown */}
              <div className="relative group">
                <label htmlFor="subject" className="block font-mono text-xs uppercase tracking-widest text-brand-surface/60 mb-2">What are you enquiring about?</label>
                <select 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-brand-surface/30 py-3 text-brand-primary font-work text-lg focus:outline-none focus:border-brand-accent transition-colors appearance-none rounded-none cursor-pointer"
                >
                  <option value="Catfish" className="bg-brand-bg text-brand-primary">Catfish</option>
                  <option value="Grasscutter" className="bg-brand-bg text-brand-primary">Grasscutter</option>
                  <option value="Rabbit" className="bg-brand-bg text-brand-primary">Rabbit</option>
                  <option value="Poultry / Eggs" className="bg-brand-bg text-brand-primary">Poultry / Eggs</option>
                  <option value="Feed Mill" className="bg-brand-bg text-brand-primary">Feed Mill</option>
                  <option value="Other" className="bg-brand-bg text-brand-primary">Other</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-0 top-10 pointer-events-none text-brand-surface/50 text-xs">▼</div>
              </div>

              {/* Message */}
              <div className="relative group">
                <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-brand-surface/60 mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-brand-surface/30 py-3 text-brand-primary font-work text-lg focus:outline-none focus:border-brand-accent transition-colors resize-none"
                  placeholder="Tell us what you need..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full md:w-auto mt-4 bg-brand-primary text-brand-bg font-mono text-sm uppercase tracking-widest py-5 px-12 hover:bg-brand-accent transition-colors duration-300"
              >
                Send enquiry
              </button>

            </form>
          </motion.div>

        </div>
      </section>

    </main>
  );
}