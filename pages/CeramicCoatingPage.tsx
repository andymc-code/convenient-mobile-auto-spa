import React, { useEffect } from 'react';
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
    const pageTitle = 'Ceramic Coating Vancouver | Mobile Service | Convenient Car Spa';
    const pageDescription = 'Protect your vehicle with professional-grade ceramic coating in Vancouver. Our mobile service provides long-lasting gloss and protection at your convenience.';
    usePageMetadata(pageTitle, pageDescription);

    useEffect(() => {
        // Service Schema
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Ceramic Coating Application",
            "description": pageDescription,
            "provider": {
                "@type": "AutoDetailing",
                "name": "Convenient Car Spa"
            },
            "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": { "@type": "GeoCoordinates", "latitude": "49.2827", "longitude": "-123.1207" },
                "geoRadius": "30000"
            },
            "url": window.location.href
        };
        const serviceScript = document.createElement('script');
        serviceScript.type = 'application/ld+json';
        serviceScript.id = 'service-schema';
        serviceScript.innerHTML = JSON.stringify(serviceSchema);
        document.head.appendChild(serviceScript);

        // FAQ Schema
        const faqItems = FAQ_DATA.ceramic;
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": { "@type": "Answer", "text": item.answer }
            }))
        };
        const faqScript = document.createElement('script');
        faqScript.type = 'application/ld+json';
        faqScript.id = 'faq-schema';
        faqScript.innerHTML = JSON.stringify(faqSchema);
        document.head.appendChild(faqScript);
        
        return () => {
            document.getElementById('service-schema')?.remove();
            document.getElementById('faq-schema')?.remove();
        };
    }, [pageDescription]);

    return (
        <div className="bg-brand-dark-bg">
            <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: `url('https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Blur_bmwm4_ceramiccoated.png?updatedAt=1759719374116')` }}>
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
                        <img src="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/m4_after_hydro.png?updatedAt=1759630759462" alt="Water beading on a ceramic coated car" className="rounded-lg shadow-xl object-cover h-full w-full" />
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