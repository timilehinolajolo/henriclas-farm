import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const yHeroImg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const ySectorsBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yFeedMill = useTransform(scrollYProgress, [0.5, 1], ["0%", "-15%"]);

  return (
    <main ref={containerRef} className="relative bg-brand-bg text-brand-primary overflow-hidden selection:bg-brand-accent selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen w-full flex items-center px-6 md:px-12 lg:px-24 pb-20">

        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <h1 className="font-fraunces text-[18vw] leading-none whitespace-nowrap -tracking-[0.05em] font-bold">
            HENRI CLAS
          </h1>
        </div>

        {/* Added 'hidden md:block' here and removed mobile widths */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:block absolute right-24 top-[15%] w-[40vw] h-[70vh] z-0 shadow-2xl bg-brand-surface overflow-hidden"
        >
          <motion.img 
            style={{ y: yHeroImg }}
            src="https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?q=80&w=2000&auto=format&fit=crop" 
            alt="Henri Clas Farm Operations" 
            className="absolute -top-[10%] left-0 w-full h-[120%] object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-brand-primary/10 pointer-events-none"></div>
        </motion.div>

        <div className="relative z-10 max-w-4xl pt-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="font-mono text-brand-accent text-xs uppercase tracking-[0.2em] font-bold">Isefun Ipaja, Lagos</span>
            <div className="h-[2px] w-12 bg-brand-primary/20"></div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-fraunces text-6xl md:text-8xl font-medium leading-[0.9] tracking-tight mb-8"
          >
            Commercial <br/>
            <span className="text-brand-accent italic pr-8">Agriculture.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-full md:w-3/5"
          >
            <p className="font-work text-lg md:text-xl font-light leading-relaxed text-brand-muted mb-10">
              A large-scale integrated farm dedicated to premium livestock, poultry, and aquaculture. We deliver consistent, high-quality bioresources and agricultural products to the market.
            </p>
            <Link to="/about" className="inline-flex items-center gap-4 font-mono text-sm uppercase tracking-widest text-brand-primary hover:text-brand-accent transition-colors group">
              <strong>Explore The Farm</strong>
              <span className="w-10 h-[1px] bg-brand-primary group-hover:bg-brand-accent group-hover:w-16 transition-all duration-300"></span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="relative z-20 bg-brand-primary py-12 px-6 md:px-12 lg:px-24 border-y border-brand-surface/20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-surface/20">
          {[
            { label: 'Integrated Sectors', value: '05' },
            { label: 'Processing', value: 'On-Site' },
            { label: 'Biosecurity Level', value: 'Commercial' },
            { label: 'Location', value: 'Lagos State' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <span className="font-fraunces text-3xl md:text-4xl text-brand-surface mb-2">{stat.value}</span>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-surface/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPANY OVERVIEW --- */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-brand-bg text-brand-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-fraunces text-4xl md:text-5xl leading-tight mb-8">
              Precision husbandry meets commercial scale.
            </h2>
            <p className="font-work text-lg text-brand-muted font-light leading-relaxed mb-6">
              At Henri Clas Integrated Farms, we view agriculture as a science. From controlled micro-environments for our grasscutter colonies to recirculating systems in our catfish ponds, every operational choice is driven by data, hygiene, and efficiency.
            </p>
            <p className="font-work text-lg text-brand-muted font-light leading-relaxed">
              By centralizing our operations and feed processing, we maintain strict quality control, ensuring that our output meets the highest standards for wholesale distribution and direct-to-consumer markets.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-brand-surface relative overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1000&auto=format&fit=crop" 
              alt="Agricultural Management" 
              className="w-full h-full object-cover opacity-90"
            />
          </motion.div>
        </div>
      </section>

      {/* --- SECTORS SECTION --- */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-brand-primary text-brand-bg">
        <motion.div 
          style={{ y: ySectorsBg }}
          className="absolute left-0 top-0 w-full md:w-1/2 h-full z-0 opacity-[0.05] pointer-events-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1586771107565-94678b87b7de?q=80&w=1000&auto=format&fit=crop" 
            alt="Farm Texture" 
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col justify-start md:sticky md:top-32 h-fit">
            <h2 className="font-fraunces text-5xl md:text-7xl leading-tight tracking-tight">Our <br/>Sectors</h2>
            <div className="mt-8 w-full h-[1px] bg-brand-surface/20"></div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mt-12 lg:mt-0">
            {[
              { id: '01', title: 'Catfish', desc: 'Large-scale aquaculture providing healthy, market-ready catfish.' },
              { id: '02', title: 'Grasscutter', desc: 'Specialized breeding environments for high-quality grasscutter production.' },
              { id: '03', title: 'Rabbit', desc: 'Dedicated rabbitry focused on consistent and healthy livestock.' },
              { id: '04', title: 'Poultry', desc: 'Commercial poultry operations delivering a steady supply of eggs and meat.' },
            ].map((sector, idx) => (
              <motion.div 
                key={sector.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col ${idx % 2 === 1 ? 'md:mt-24' : ''}`}
              >
                <div className="flex items-end gap-4 mb-4 border-b border-brand-surface/20 pb-3">
                  <span className="font-mono text-brand-accent text-xl font-bold">{sector.id}</span>
                  <h3 className="font-fraunces text-3xl text-brand-surface">{sector.title}</h3>
                </div>
                <p className="font-work font-light text-brand-surface/70 leading-relaxed max-w-sm">
                  {sector.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE FEED MILL SECTION --- */}
      <section className="relative h-[80vh] w-full flex items-center justify-center bg-brand-bg overflow-hidden border-y border-brand-surface">
        <motion.div 
          style={{ y: yFeedMill }}
          className="absolute inset-0 w-full h-[120%] z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
            alt="Farm Feed Mill" 
            className="w-full h-full object-cover opacity-15 grayscale"
          />
        </motion.div>

        <div className="absolute inset-0 bg-brand-bg/80"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="font-mono text-brand-accent text-sm uppercase tracking-[0.2em] block mb-6 font-bold">
            Sector 05
          </span>
          
          <h2 className="font-fraunces text-5xl md:text-7xl text-brand-primary leading-[1.1] tracking-tight mb-6">
            The Feed Mill is the <br/>
            <span className="italic">heart of the farm.</span>
          </h2>
          
          <p className="font-work text-lg text-brand-muted max-w-2xl mx-auto font-light">
            By producing our own feed on-site, we guarantee optimal nutrition across all sectors, ensuring the health of our livestock and the uncompromised quality of our final products.
          </p>
        </div>
      </section>

      {/* --- CTA / CONTACT (NEW) --- */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-brand-surface flex flex-col items-center justify-center text-center">
        <h2 className="font-fraunces text-4xl md:text-5xl text-brand-primary mb-6">
          Ready to source premium livestock?
        </h2>
        <p className="font-work text-lg text-brand-muted max-w-2xl font-light mb-10">
          Whether you require wholesale distribution or direct market supply, our facility in Isefun Ipaja is equipped to meet your operational demands.
        </p>
        <Link 
          to="/contact" 
          className="bg-brand-primary text-white font-mono text-sm uppercase tracking-widest py-4 px-10 hover:bg-brand-accent transition-colors duration-300"
        >
          Contact The Farm
        </Link>
      </section>

    </main>
  );
}