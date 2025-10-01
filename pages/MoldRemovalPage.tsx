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

const MoldRemovalPage: React.FC = () => {
    usePageMetadata('Car Mold Removal Vancouver | Mobile Service | Convenient Car Spa', 'Expert mobile mold removal for vehicles in Vancouver. We safely eliminate hazardous mold from your car\'s interior, protecting your health.');

    return (
        <div className="bg-brand-dark-bg">
            <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1603106915313-64a4d3340052?q=80&w=2670&auto=format&fit=crop')` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white uppercase tracking-wider">Mold Removal</h1>
                    <p className="text-brand-text-secondary mt-2 text-lg max-w-2xl">Safely eradicating hazardous mold & restoring a healthy cabin environment.</p>
                </div>
            </div>
            <div className="container mx-auto px-6 py-16">
                <div className="mb-8">
                    <Breadcrumb paths={[{ name: 'Services', path: '/#services' }, { name: 'Mold Removal', path: '/mold-removal' }]} />
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-bold font-display text-white mb-4">PROTECT YOUR HEALTH & YOUR VEHICLE.</h2>
                        <p className="text-brand-text-secondary mb-6 leading-relaxed">
                           Mold growth in a vehicle is a serious health concern that requires professional remediation. Our mobile process doesn't just clean the visible spots; it eradicates the problem at its source. We bring specialized equipment, including HEPA vacuums and ozone generators, along with EPA-approved biocides to ensure your car's interior is returned to a safe and sanitary state.
                        </p>
                        
                        <h3 className="text-2xl font-semibold font-display text-white mt-10 mb-6">OUR REMEDIATION PROCESS:</h3>
                        <ul className="space-y-4 text-brand-text-secondary">
                           <li className="flex items-center"><CheckIcon /><span>Full Interior Inspection and Assessment</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Containment to Prevent Spore Spread During Service</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Deep Cleaning and Disinfection of All Surfaces</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Ozone Treatment to Kill Spores and Eliminate Odors</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Replacement of Cabin Air Filter (Highly Recommended)</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Final Inspection to Ensure Complete Remediation</span></li>
                        </ul>
                         <a 
                            href={getWhatsAppLink("Hi! I need to book an urgent assessment for mold removal.")} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-10 inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition-colors uppercase font-display tracking-widest"
                        >
                            Book an Urgent Assessment
                        </a>
                    </div>
                    <div className="lg:col-span-2">
                        <img src="https://images.unsplash.com/photo-1580251744136-5a5c64486620?q=80&w=2574&auto=format&fit=crop" alt="Technician in protective gear cleaning car interior" className="rounded-lg shadow-xl object-cover h-full w-full" />
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-display text-white text-center mb-10 uppercase">Frequently Asked Questions</h2>
                    <FaqAccordion items={FAQ_DATA.mold} />
                </div>
            </div>
        </div>
    );
};

export default MoldRemovalPage;