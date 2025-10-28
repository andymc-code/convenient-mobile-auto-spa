import React from 'react';

// Icons
const IconConvenience = () => (
    <svg className="w-12 h-12 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
);

const IconQuality = () => (
    <svg className="w-12 h-12 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16l-4-4 6.293-6.293a1 1 0 011.414 0z"></path>
    </svg>
);

const IconEquipped = () => (
    <svg className="w-12 h-12 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
);

const IconProfessional = () => (
     <svg className="w-12 h-12 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
     </svg>
);

const WHY_CHOOSE_US_DATA = [
    {
        icon: <IconConvenience />,
        title: "Unmatched Convenience",
        description: "We bring the complete detailing spa to your doorstep anywhere in Metro Vancouver. No travel, no waiting rooms—just exceptional service where you are."
    },
    {
        icon: <IconQuality />,
        title: "Showroom Quality Results",
        description: "We use only premium products and meticulous techniques to achieve a finish that often exceeds showroom standards."
    },
    {
        icon: <IconEquipped />,
        title: "Fully Self-Sufficient",
        description: "Our mobile units have their own filtered water and power, making us perfect for condo parkades, office lots, and homes."
    },
    {
        icon: <IconProfessional />,
        title: "Trusted & Professional",
        description: "Our team is experienced, insured, and passionate about automotive care. We treat every vehicle as if it were our own."
    }
];

const WhyChooseUsSection: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary">Why Choose Convenient Car Spa?</h2>
                    <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">The difference is in the details—and the delivery.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {WHY_CHOOSE_US_DATA.map((item, index) => (
                         <div key={index} className="flex flex-col items-center text-center p-6 border border-brand-border rounded-lg bg-brand-surface/50 hover:bg-brand-surface transition-all duration-300 transform hover:-translate-y-2">
                             <div className="mb-5">{item.icon}</div>
                             <h3 className="text-xl font-bold font-display text-white mb-3 uppercase tracking-wider">{item.title}</h3>
                             <p className="text-brand-text-secondary text-sm leading-relaxed">{item.description}</p>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;