import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <main ref={containerRef} className="relative bg-brand-bg text-brand-primary overflow-hidden selection:bg-brand-accent selection:text-white pt-24">
      
      {/* --- HERO SECTION --- */}
      <section className="relative px-6 md:px-12 lg:px-24 pb-24 md:pb-32 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="font-fraunces text-6xl md:text-8xl font-medium leading-[0.9] tracking-tight mb-8">
            Five sectors, <br/>
            <span className="text-brand-accent italic pr-8">run as one.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 font-work text-lg text-brand-muted font-light leading-relaxed"
          >
            <p>
              Henri Clas Integrated Farms sits in Isefun Ipaja, in the Alimosho area of Lagos State. We're not a single-product farm — we raise catfish, grasscutter, and rabbit, keep poultry, and run our own feed mill, all on one site.
            </p>
            <p className="text-brand-primary font-medium text-xl">
              Most farms specialise in one animal. We chose to specialise in a system instead.
            </p>
            <p>
              Each sector at Henri Clas is managed by people who know it well, with its own housing, feeding schedule and health checks. What ties them together is the feed mill at the centre of the farm — it's where we formulate and produce the feed that goes into every pond, hutch and pen on site, so the same standard of care runs through everything we sell.
            </p>
            <p>
              That structure means we can offer more than most farms in one place — live animals for breeding, fresh and processed meat, and eggs — without cutting corners on any single sector to do it.
            </p>
            <p>
              Whether you're stocking a new farm, buying meat for your home or business, or looking for a reliable supplier to partner with, that's the standard we work to.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[500px] lg:h-auto bg-brand-surface overflow-hidden"
          >
            <motion.img 
              style={{ y: yImage }}
              src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=1000&auto=format&fit=crop" 
              alt="Farm Operations" 
              className="absolute inset-0 w-full h-[120%] object-cover opacity-90 grayscale-[30%]"
            />
          </motion.div>
        </div>
      </section>

      {/* --- SYSTEM / FLOW SECTION --- */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-brand-primary text-brand-bg">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-fraunces text-4xl md:text-5xl leading-tight mb-4">How the farm fits together</h2>
            <p className="font-mono text-brand-accent text-sm uppercase tracking-widest mb-16">The feed mill is the centre of it</p>
          </motion.div>

          <div className="relative flex flex-col items-center">
            {/* Center Feed Mill */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 md:w-40 md:h-40 bg-brand-accent rounded-full flex flex-col items-center justify-center text-brand-primary z-10 shadow-2xl"
            >
              <span className="font-fraunces text-2xl font-bold">Feed</span>
              <span className="font-mono text-xs uppercase tracking-widest">Mill</span>
            </motion.div>

            {/* Connecting Lines (Desktop) */}
            <div className="hidden md:block absolute top-20 left-1/2 w-[80%] -translate-x-1/2 h-[2px] bg-brand-surface/30 z-0"></div>
            <div className="hidden md:block absolute top-20 left-1/2 h-24 w-[2px] bg-brand-surface/30 z-0"></div>

            {/* Sectors Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 w-full mt-12 md:mt-24 relative z-10">
              {[
                { name: 'Catfish', label: 'Ponds' },
                { name: 'Grasscutter', label: 'Colonies' },
                { name: 'Rabbit', label: 'Hutches' },
                { name: 'Poultry', label: 'Coops' }
              ].map((sector, i) => (
                <motion.div 
                  key={sector.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  className="flex flex-col items-center p-6 border border-brand-surface/20 bg-brand-primary hover:bg-brand-surface/5 transition-colors"
                >
                  <h3 className="font-fraunces text-2xl md:text-3xl text-brand-surface mb-2">{sector.name}</h3>
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-surface/60">{sector.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 font-work text-lg text-brand-surface/80 font-light max-w-2xl mx-auto"
          >
            Everything we raise starts with feed formulated on-site — <strong className="text-brand-surface font-normal">one mill, four sectors, one standard.</strong>
          </motion.p>
        </div>
      </section>

      {/* --- HOW WE WORK (VALUES) --- */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-brand-bg text-brand-primary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-fraunces text-4xl md:text-5xl leading-tight mb-4">How we work</h2>
            <p className="font-mono text-brand-accent text-sm uppercase tracking-widest">What we hold every sector to</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-brand-surface/20 pt-16">
            {[
              {
                title: 'Health first',
                subtitle: 'Prevention over cure',
                desc: 'Animals are checked regularly for early signs of illness, not treated only once a problem shows.'
              },
              {
                title: 'Clean processing',
                subtitle: 'No shortcuts on meat',
                desc: 'Our smoked and dressed products are processed cleanly, with no artificial additives or preservatives.'
              },
              {
                title: 'Straight answers',
                subtitle: 'Honest about stock',
                desc: "If something isn't ready or available, we'll tell you — and let you know when it will be."
              }
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col"
              >
                <span className="font-mono text-brand-accent text-xs font-bold mb-4">0{i + 1}</span>
                <h3 className="font-fraunces text-3xl mb-2">{value.title}</h3>
                <h4 className="font-mono text-xs uppercase tracking-widest text-brand-muted mb-4">{value.subtitle}</h4>
                <p className="font-work text-brand-muted font-light leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LOCATION & CONTACT --- */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-brand-surface text-brand-primary border-t border-brand-primary/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-fraunces text-4xl md:text-5xl mb-10">Find us</h2>
            
            <ul className="space-y-6 font-work text-lg font-light">
              <li className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold mb-1">Address</span>
                <span>Behind Adelodun Bus-Stop, Isefun Ayobo, Ipaja, Lagos State.</span>
              </li>
              <li className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold mb-1">Phone</span>
                <span>0703 449 8274 <span className="mx-2 text-brand-primary/30">·</span> 0703 450 7108</span>
              </li>
              <li className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold mb-1">Email</span>
                <span>henriclasfarms@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div className="flex md:justify-end">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-brand-primary text-brand-bg font-mono text-sm uppercase tracking-widest py-5 px-10 hover:bg-brand-accent transition-colors duration-300 w-full md:w-auto text-center"
            >
              Get directions & contact details
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}