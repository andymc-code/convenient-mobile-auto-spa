import React from 'react';
import FaqAccordion from '../components/FaqAccordion';
import Breadcrumb from '../components/Breadcrumb';
import { FAQ_DATA, getWhatsAppLink } from '../constants';
import { usePageMetadata } from '../hooks/usePageMetadata';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const CeramicCoatingPage: React.FC = () => {
    usePageMetadata('Ceramic Coating Vancouver | Mobile Service | Convenient Car Spa', 'Protect your vehicle with professional-grade ceramic coating in Vancouver. Our mobile service provides long-lasting gloss and protection at your convenience.');

    return (
        <div className="bg-brand-dark-bg">
            <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1617886321285-1d4a3e3d7c3c?q=80&w=2670&auto=format&fit=crop')` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white uppercase tracking-wider">Ceramic Coating</h1>
                    <p className="text-brand-text-secondary mt-2 text-lg max-w-2xl">The ultimate in long-term paint protection, gloss, and hydrophobicity.</p>
                </div>
            </div>
            <div className="container mx-auto px-6 py-16">
                <div className="mb-8">
                    <Breadcrumb paths={[{ name: 'Services', path: '/#services' }, { name: 'Ceramic Coating', path: '/ceramic-coating' }]} />
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-bold font-display text-white mb-4">THE ULTIMATE PAINT PROTECTION.</h2>
                        <p className="text-brand-text-secondary mb-6 leading-relaxed">
                            A ceramic coating represents the pinnacle of paint protection technology. It is a liquid polymer that, when applied by our certified technicians, chemically bonds with your vehicle's factory paint, creating a semi-permanent, hardened glass layer. Our mobile service brings this advanced technology to you, providing unparalleled gloss, UV protection, and making your car incredibly easy to clean.
                        </p>
                        
                        <h3 className="text-2xl font-semibold font-display text-white mt-10 mb-6">KEY BENEFITS:</h3>
                        <ul className="space-y-4 text-brand-text-secondary">
                            <li className="flex items-center"><CheckIcon /><span>Extreme Gloss, Depth, and Slickness</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Long-Term Hydrophobic Properties (Water Beading)</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Protection from UV Rays, Bird Droppings, and Contaminants</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Enhanced Scratch and Swirl Resistance</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Makes Washing and Maintenance Effortless</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Packages Ranging from 1 to 5+ Years of Durability</span></li>
                        </ul>
                         <a 
                            href={getWhatsAppLink("Hi! I'm interested in getting a quote for Ceramic Coating.")} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-10 inline-block bg-brand-accent text-brand-dark-bg font-bold py-3 px-8 rounded-md hover:opacity-90 transition-colors uppercase font-display tracking-widest"
                        >
                            Get a Quote
                        </a>
                    </div>
                    <div className="lg:col-span-2">
                        <img src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=2574&auto=format&fit=crop" alt="Water beading on a ceramic coated car" className="rounded-lg shadow-xl object-cover h-full w-full" />
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-display text-white text-center mb-10 uppercase">Frequently Asked Questions</h2>
                    <FaqAccordion items={FAQ_DATA.ceramic} />
                </div>
            </div>
        </div>
    );
};

export default CeramicCoatingPage;