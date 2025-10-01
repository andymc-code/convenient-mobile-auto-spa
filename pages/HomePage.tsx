import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import PricingSection from '../components/PricingSection';
import BookingSection from '../components/BookingSection';
import { usePageMetadata } from '../hooks/usePageMetadata';

const HomePage: React.FC = () => {
    usePageMetadata('Convenient Mobile Car Detailing & Car Wash Vancouver | Convenient Car Spa', 'Convenient Car Spa offers convenient mobile car detailing and car wash services in Vancouver. We come to you! Services include interior/exterior cleaning, ceramic coating & paint correction.');
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <GallerySection />
            <PricingSection />
            <BookingSection />
        </div>
    );
};

export default HomePage;