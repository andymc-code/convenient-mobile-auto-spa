import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const QuoteIcon = () => (
  <svg className="w-8 h-8 text-brand-accent mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
    <path d="M9.333 22.667h4L16 17.333V9.333H6.667v8h4L8 22.667H9.333zM22.667 22.667h4L29.333 17.333V9.333H20v8h4l-2.667 5.333h1.334z" />
  </svg>
);

const TestimonialsSection: React.FC = () => {
  const duplicatedTestimonials = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section className="py-24 bg-brand-surface">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${TESTIMONIALS_DATA.length * 26}rem); }
          }
          .animate-scrolling-testimonials {
            animation: scroll 70s linear infinite;
          }
        `}
      </style>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary">Client Reviews</h2>
          <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">Hear from our satisfied customers across Metro Vancouver.</p>
        </div>
        
        {/* Desktop: Auto-scrolling carousel */}
        <div 
          className="hidden md:flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group"
        >
          <ul className="flex items-stretch animate-scrolling-testimonials group-hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((testimonial, index) => (
              <li key={index} className="flex-shrink-0 w-96 mx-4">
                <div className="h-full bg-brand-dark-bg p-8 rounded-lg border border-brand-border flex flex-col shadow-lg">
                  <QuoteIcon />
                  <p className="text-brand-text-secondary mb-6 flex-grow italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-auto border-t border-brand-border pt-4">
                    <p className="font-semibold text-brand-text-primary">{testimonial.name}</p>
                    <p className="text-sm text-brand-text-secondary/70">{testimonial.location}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile: Swipeable carousel */}
        <div className="md:hidden w-full">
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-p-6 -mx-6 px-6 pb-4 gap-4">
              {TESTIMONIALS_DATA.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-4/5 snap-center">
                  <div className="h-full bg-brand-dark-bg p-6 rounded-lg border border-brand-border flex flex-col shadow-lg">
                    <QuoteIcon />
                    <p className="text-brand-text-secondary mb-6 flex-grow italic text-sm">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="mt-auto border-t border-brand-border pt-4">
                      <p className="font-semibold text-brand-text-primary">{testimonial.name}</p>
                      <p className="text-sm text-brand-text-secondary/70">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;