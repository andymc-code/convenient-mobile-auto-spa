import React from 'react';
import { GALLERY_DATA } from '../constants';
import ImageSlider from './ImageSlider';

const GallerySection: React.FC = () => {
    return (
        <section id="gallery" className="py-24 bg-brand-dark-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display uppercase text-brand-text-primary">The Proof is in the Polish</h2>
                    <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">Drag the slider to witness the dramatic transformations we deliver.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {GALLERY_DATA.map((item, index) => (
                        <div key={index} className="border border-brand-border p-2 rounded-lg">
                            <ImageSlider before={item.before} after={item.after} />
                            <h3 className="text-center text-lg font-semibold font-display uppercase tracking-wider mt-4 text-brand-text-primary">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;