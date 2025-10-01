import React from 'react';
import { getWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../constants';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-[90vh] bg-brand-dark-bg flex items-center">
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-50" 
                style={{ backgroundImage: `url('https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Gemini_Generated_Image_hxtj2ghxtj2ghxtj.png')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-bg via-brand-dark-bg/80 to-transparent"></div>
            
            <div className="relative container mx-auto px-6 text-center text-brand-text-primary">
                <h1 className="text-4xl md:text-7xl font-extrabold font-display uppercase tracking-wider text-shadow-lg">
                    Precision Detailing,
                </h1>
                <h2 className="text-4xl md:text-7xl font-extrabold font-display uppercase tracking-wider text-shadow-lg mb-6">
                    Delivered with <span className="text-brand-accent">Convenience.</span>
                </h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-brand-text-secondary">
                    We bring a meticulous, spa-quality detailing experience directly to your home or office in Vancouver. Your vehicle deserves the best, on your schedule.
                </p>
                <a 
                    href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-brand-accent text-brand-dark-bg font-bold py-4 px-10 rounded-md text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-widest font-display"
                >
                    Schedule Your Detail
                </a>
            </div>
        </section>
    );
};

export default HeroSection;