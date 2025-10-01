import React, { useState } from 'react';
import { FaqItem } from '../types';

interface FaqAccordionProps {
  items: FaqItem[];
}

const AccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-brand-border">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-6"
            >
                <span className="text-lg font-semibold text-brand-text-primary">{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-brand-text-secondary pb-6 pr-6 leading-relaxed">{item.answer}</p>
            </div>
        </div>
    );
};


const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
        {items.map((item, index) => (
            <AccordionItem key={index} item={item} />
        ))}
    </div>
  );
};

export default FaqAccordion;