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

const InteriorRestorationPage: React.FC = () => {
    const pageTitle = 'Interior Car Detailing Vancouver | Convenient Car Spa';
    const pageDescription = 'Book our mobile interior car cleaning service in Vancouver. We deep clean and restore every surface to bring back that new car feel, right at your doorstep.';
    usePageMetadata(pageTitle, pageDescription);

    useEffect(() => {
        // Service Schema
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Interior Car Detailing & Restoration",
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
        const faqItems = [...FAQ_DATA.interior, ...FAQ_DATA.general.slice(1)];
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
            <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: `url('https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/jeep_after_detail.png?updatedAt=1759629189923')` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white uppercase tracking-wider">Interior Restoration</h1>
                    <p className="text-brand-text-secondary mt-2 text-lg max-w-2xl">Deep cleaning and sanitization for a factory-fresh feel and a healthier drive.</p>
                </div>
            </div>
            <div className="container mx-auto px-6 py-16">
                 <div className="mb-8">
                    <Breadcrumb paths={[{ name: 'Services', path: '/#services' }, { name: 'Interior Restoration', path: '/interior-restoration' }]} />
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-bold font-display text-white mb-4">A FACTORY-FRESH FEEL. REIMAGINED.</h2>
                        <p className="text-brand-text-secondary mb-6 leading-relaxed">
                            Rediscover the pleasure of a pristine cabin. Our interior restoration is an exhaustive deep clean of every nook and cranny, brought to your doorstep. We use professional-grade tools, steam sanitization, and pH-neutral cleaners to safely remove dirt, lift stains, and eliminate odors, leaving your interior fresh, clean, and meticulously detailed.
                        </p>
                        
                        <h3 className="text-2xl font-semibold font-display text-white mt-10 mb-6">OUR PROCESS INCLUDES:</h3>
                        <ul className="space-y-4 text-brand-text-secondary">
                            <li className="flex items-center"><CheckIcon /><span>Thorough Vacuuming of All Surfaces, Crevices, and Vents</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Hot Water Extraction for Carpets and Upholstery</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Steam Cleaning for Deep Sanitization & Stain Removal</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Leather and Vinyl Cleaning & Conditioning</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Detailed Cleaning of Dashboard, Doors, and Console</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Interior Glass Cleaning for Perfect, Haze-Free Clarity</span></li>
                        </ul>
                         <a 
                            href={getWhatsAppLink("Hi! I'm interested in booking an Interior Restoration service.")}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-10 inline-block bg-brand-accent text-brand-dark-bg font-bold py-3 px-8 rounded-md hover:opacity-90 transition-colors uppercase font-display tracking-widest"
                        >
                            Book This Service
                        </a>
                    </div>
                    <div className="lg:col-span-2">
                        <img src="https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Interior%20Restoration_card.png" alt="Before and after of a deep cleaned car seat" className="rounded-lg shadow-xl object-cover h-full w-full" />
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-display text-white text-center mb-10 uppercase">Frequently Asked Questions</h2>
                    <FaqAccordion items={[...FAQ_DATA.interior, ...FAQ_DATA.general.slice(1)]} />
                </div>
            </div>
        </div>
    );
};

export default InteriorRestorationPage;