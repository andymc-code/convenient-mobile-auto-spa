import React from 'react';
import { PRICING_DATA, getWhatsAppLink } from '../constants';

const IconCheck = () => (
    <svg className="w-5 h-5 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const PricingSection: React.FC = () => {
    return (
        <section id="pricing" className="py-24 bg-brand-surface">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary">Choose Your Level of Service</h2>
                    <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">Transparent pricing for exceptional quality, delivered directly to you.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {PRICING_DATA.map((pkg, index) => (
                        <div key={index} className={`bg-brand-dark-bg p-8 rounded-lg border flex flex-col relative transition-all duration-300 ${pkg.isFeatured ? 'border-brand-accent scale-105' : 'border-brand-border'}`}>
                            {pkg.isFeatured && (
                                <span className="bg-brand-accent text-brand-dark-bg text-xs font-bold uppercase px-3 py-1 rounded-full self-center absolute -top-4 font-display tracking-wider">Most Popular</span>
                            )}
                            <h3 className="text-3xl font-bold font-display text-center text-brand-text-primary mb-2 uppercase">{pkg.title}</h3>
                            <p className="text-5xl font-extrabold text-center text-brand-text-primary mb-6 font-display">{pkg.price}</p>
                            <ul className="space-y-4 text-brand-text-secondary flex-grow mb-8">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <IconCheck />
                                        {feature}
                                    </li>

                                ))}
                            </ul>
                            <a 
                                href={getWhatsAppLink(`Hi! I'm interested in the ${pkg.title} package.`)} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={`mt-auto text-center font-bold py-3 px-6 rounded-md transition-all duration-300 w-full block uppercase font-display tracking-widest ${pkg.isFeatured ? 'bg-brand-accent text-brand-dark-bg hover:opacity-90' : 'bg-brand-border text-brand-text-primary hover:bg-brand-accent hover:text-brand-dark-bg'}`}>
                                Select Package
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;