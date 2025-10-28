import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import PricingSection from '../components/PricingSection';
import BookingSection from '../components/BookingSection';
import { usePageMetadata } from '../hooks/usePageMetadata';
import TestimonialsSection from '../components/TestimonialsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import FaqSection from '../components/FaqSection';

const HomePage: React.FC = () => {
    usePageMetadata('Convenient Mobile Car Detailing & Car Wash Vancouver | Convenient Car Spa', 'Convenient Car Spa offers convenient mobile car detailing and car wash services in Metro Vancouver. We come to you! Services include interior/exterior cleaning, ceramic coating & paint correction.');
    return (
        <div>
            <HeroSection />
            <TestimonialsSection />
            <ServicesSection />
            <GallerySection />
            <PricingSection />
            <WhyChooseUsSection />
            <BookingSection />
            <FaqSection />
        </div>
    );
};

export default HomePage;