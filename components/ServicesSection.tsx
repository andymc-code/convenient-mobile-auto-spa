import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';

const IconSchedule = () => (
    <svg className="w-12 h-12 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
    </svg>
);
const IconVan = () => (
    <svg className="w-12 h-12 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
);
const IconCar = () => (
    <svg className="w-12 h-12 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16l-4-4 6.293-6.293a1 1 0 011.414 0z"></path>
    </svg>
);

const ServicesSection: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary">Our Signature Services</h2>
                    <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">Tailored solutions that blend meticulous craftsmanship with the ultimate convenience.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_DATA.map((service, index) => (
                        <div key={index} className="bg-brand-surface rounded-lg shadow-2xl overflow-hidden group border border-brand-border transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="relative h-56">
                                <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <h3 className="absolute bottom-0 left-0 p-6 text-2xl font-bold font-display text-white">{service.name}</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-brand-text-secondary text-sm mb-6 h-12">{service.description}</p>
                                <Link to={service.link.replace('#', '')} className="font-semibold text-brand-accent hover:opacity-90 transition-opacity flex items-center group">
                                    Learn More
                                    <span className="transform transition-transform duration-300 group-hover:translate-x-2 ml-2">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-28">
                     <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary">How It Works</h2>
                        <p className="text-brand-text-secondary mt-4">A seamless experience in three simple steps.</p>
                    </div>
                     <div className="grid md:grid-cols-3 gap-10">
                         <div className="flex flex-col items-center text-center p-6 border border-brand-border rounded-lg bg-brand-surface/50">
                             <div className="mb-4"><IconSchedule/></div>
                             <h3 className="text-xl font-bold font-display text-white mb-2 uppercase">1. Book Easily</h3>
                             <p className="text-brand-text-secondary">Contact us via WhatsApp to select your service and schedule a convenient time.</p>
                         </div>
                         <div className="flex flex-col items-center text-center p-6 border border-brand-border rounded-lg bg-brand-surface/50">
                             <div className="mb-4"><IconVan/></div>
                             <h3 className="text-xl font-bold font-display text-white mb-2 uppercase">2. We Come To You</h3>
                             <p className="text-brand-text-secondary">Our fully-equipped, self-sufficient mobile van arrives at your home or office.</p>
                         </div>
                         <div className="flex flex-col items-center text-center p-6 border border-brand-border rounded-lg bg-brand-surface/50">
                             <div className="mb-4"><IconCar/></div>
                             <h3 className="text-xl font-bold font-display text-white mb-2 uppercase">3. Enjoy Perfection</h3>
                             <p className="text-brand-text-secondary">Relax while we restore your car's brilliance. No travel, no waiting rooms.</p>
                         </div>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;