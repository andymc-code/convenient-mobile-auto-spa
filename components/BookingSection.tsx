import React from 'react';
import { getWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../constants';

const BookingSection: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark-bg">
            <div className="container mx-auto px-6">
                <div className="bg-brand-surface border border-brand-border p-8 md:p-12 rounded-lg shadow-xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary mb-4">Ready for a Flawless Finish?</h2>
                    <p className="text-brand-text-secondary mb-8 max-w-2xl mx-auto">
                        Booking is simple and personal. Tap the button below to start a conversation with us on WhatsApp and schedule your appointment.
                    </p>
                    <a 
                        href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-brand-accent text-brand-dark-bg font-bold py-4 px-10 rounded-md text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-widest font-display"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;