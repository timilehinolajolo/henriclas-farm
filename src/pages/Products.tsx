import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    id: '01',
    title: 'Catfish',
    subtitle: 'Fresh & smoked catfish',
    desc: 'Raised in our ponds and processed on site. Smoked in-house with no artificial additives or preservatives — just clean, natural flavour.',
    options: [
      'Fresh, live catfish',
      'Smoked catfish, packaged',
      'Delivery available nationwide'
    ],
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1200&auto=format&fit=crop', 
  },
  {
    id: '02',
    title: 'Grasscutter',
    subtitle: 'Breeding colonies & fresh meat',
    desc: 'Healthy breeding pairs raised for farmers looking to start or expand their own colonies, alongside clean, fresh grasscutter meat ready for cooking.',
    options: [
      'Live breeding pairs (colonies)',
      'Fresh grasscutter meat, cleaned and dressed'
    ],
    image: 'https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=1200&auto=format&fit=crop', // Nature/brush texture substitute
  },
  {
    id: '03',
    title: 'Rabbit',
    subtitle: 'Live rabbits & dressed meat',
    desc: 'Bred with scientific care from weaning through to maturity. Available live at every growth stage, or as fresh, dressed rabbit meat.',
    options: [
      'Weaner & grower rabbits',
      'Mature bucks, does & pregnant does',
      'Fresh & full dressed rabbit meat'
    ],
    image: 'https://images.unsplash.com/photo-1585110396000-c9fd4e481540?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'Poultry',
    subtitle: 'Broilers, layers & eggs',
    desc: 'Our poultry unit keeps both broilers and layers, feeding into a steady supply of table eggs alongside dressed birds.',
    options: [
      'Broiler chickens',
      'Layer birds',
      'Fresh table eggs, by the crate'
    ],
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '05',
    title: 'Feed Mill',
    subtitle: 'Farm-formulated feed',
    desc: 'We mill our own feed on site, formulated for each sector we raise — the same feed that goes into our own ponds and pens is available to other farmers too.',
    options: [
      'Custom-formulated feed by animal type',
      'Bulk & batch production'
    ],
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1200&auto=format&fit=crop',
  }
];

export default function Products() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="relative bg-brand-bg text-brand-primary overflow-hidden selection:bg-brand-accent selection:text-white pt-24 md:pt-32">
      
      {/* --- HERO SECTION --- */}
      <section className="relative px-6 md:px-12 lg:px-24 pb-20 max-w-7xl mx-auto border-b border-brand-surface/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="font-fraunces text-6xl md:text-8xl font-medium leading-[0.9] tracking-tight mb-8">
            What's available <br/>
            <span className="text-brand-accent italic pr-8">from the farm.</span>
          </h1>
          
          <div className="w-full md:w-2/3 mt-12 space-y-6">
            <p className="font-work text-lg md:text-xl text-brand-muted font-light leading-relaxed">
              Stock, availability and pricing can change week to week — reach out directly and we'll confirm what's ready now.
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- PRODUCT CATALOGUE --- */}
      <section className="relative w-full">
        {products.map((product, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={product.id} className="border-b border-brand-surface/20">
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-screen lg:min-h-[80vh]`}>
                
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden bg-brand-surface"
                >
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-brand-bg relative">
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-lg w-full"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <span className="font-mono text-brand-accent text-2xl font-bold">{product.id}</span>
                      <div className="h-[1px] flex-1 bg-brand-primary/20"></div>
                    </div>
                    
                    <h2 className="font-fraunces text-5xl md:text-6xl mb-4 text-brand-surface tracking-tight">
                      {product.title}
                    </h2>
                    <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-brand-accent font-bold mb-8">
                      {product.subtitle}
                    </h3>
                    
                    <p className="font-work text-lg text-brand-muted font-light leading-relaxed mb-10">
                      {product.desc}
                    </p>

                    <div className="mb-12">
                      <span className="font-mono text-xs uppercase tracking-widest text-brand-surface/50 mb-4 block">Available Options</span>
                      <ul className="space-y-4 font-work font-medium text-brand-primary">
                        {product.options.map((opt, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-brand-accent mt-1">✦</span>
                            <span>{opt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      to={`/contact?subject=${product.title.toLowerCase()}`} 
                      className="inline-flex items-center gap-4 font-mono text-sm uppercase tracking-widest text-brand-primary hover:text-brand-accent transition-colors group"
                    >
                      <strong>Enquire about {product.title.toLowerCase()}</strong>
                      <span className="w-10 h-[1px] bg-brand-primary group-hover:bg-brand-accent group-hover:w-16 transition-all duration-300"></span>
                    </Link>
                  </motion.div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-brand-primary text-brand-bg text-center flex flex-col items-center justify-center">
        <h2 className="font-fraunces text-4xl md:text-6xl text-brand-bg mb-6 max-w-3xl leading-tight">
          Don't see what you're <span className="italic text-brand-accent">looking for?</span>
        </h2>
        <p className="font-work text-lg text-brand-bg/70 max-w-xl font-light mb-12">
          Availability changes with the season — get in touch and we'll let you know what's ready.
        </p>
        <Link 
          to="/contact" 
          className="bg-brand-bg text-brand-primary font-mono text-sm uppercase tracking-widest py-5 px-10 hover:bg-brand-accent hover:text-brand-bg transition-colors duration-300"
        >
          Contact Henri Clas Farms
        </Link>
      </section>

    </main>
  );
}