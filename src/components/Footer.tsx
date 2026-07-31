import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-brand-surface pt-24 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Massive Branding */}
        <div className="mb-20">
          <h2 className="font-fraunces text-[12vw] md:text-[8vw] leading-none tracking-tighter opacity-20 select-none">
            HENRI CLAS.
          </h2>
        </div>

        {/* Middle Section: Grid Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Identity */}
          <div className="lg:col-span-1">
            <span className="font-fraunces text-2xl font-bold tracking-tight block mb-2 text-white">
              Henri Clas
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-surface/60 block mb-6">
              Integrated Farms
            </span>
            <p className="font-work text-sm font-light leading-relaxed text-brand-surface/70">
              Commercial agriculture engineered for scale, quality, and consistent market supply.
            </p>
          </div>

          {/* Column 2: Sectors */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-6 font-bold">Our Sectors</h4>
            <ul className="flex flex-col gap-4 font-work text-sm font-light text-brand-surface/80">
              <li><Link to="/products#catfish" className="hover:text-white transition-colors">01. Aquaculture (Catfish)</Link></li>
              <li><Link to="/products#grasscutter" className="hover:text-white transition-colors">02. Grasscutter Breeding</Link></li>
              <li><Link to="/products#rabbit" className="hover:text-white transition-colors">03. Commercial Rabbitry</Link></li>
              <li><Link to="/products#poultry" className="hover:text-white transition-colors">04. Layer & Broiler Poultry</Link></li>
              <li><Link to="/products#feedmill" className="hover:text-white transition-colors">05. On-Site Feed Mill</Link></li>
            </ul>
          </div>

          {/* Column 3: Corporate */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-6 font-bold">Corporate</h4>
            <ul className="flex flex-col gap-4 font-work text-sm font-light text-brand-surface/80">
              <li><Link to="/about" className="hover:text-white transition-colors">About The Farm</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Wholesale Inquiries</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Partnerships</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Location Details</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-6 font-bold">Headquarters</h4>
            <address className="not-italic font-work text-sm font-light text-brand-surface/80 flex flex-col gap-4">
              <p>
                Isefun Ipaja,<br/>
                Lagos State,<br/>
                Nigeria
              </p>
              <a href="mailto:operations@henriclas.com" className="hover:text-white transition-colors">
                operations@henriclas.com
              </a>
              <a href="tel:+2340000000000" className="hover:text-white transition-colors">
                +234 (0) 000 000 0000
              </a>
            </address>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-surface/20 text-brand-surface/50 font-mono text-xs uppercase tracking-widest">
          <p>&copy; {currentYear} Henri Clas Integrated Farms.</p>
          <p className="mt-4 md:mt-0">All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}