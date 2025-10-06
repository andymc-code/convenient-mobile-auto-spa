import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES_DATA, LOCATIONS_DATA, getWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../constants';

const LOGO_URL = "https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/convienen_detailing_logo.png?updatedAt=1759228174543";

const MenuIcon = () => (
    <svg className="w-7 h-7 text-brand-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
);

const CloseIcon = () => (
    <svg className="w-7 h-7 text-brand-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);


const Header: React.FC = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isLocationsOpen, setIsLocationsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isMobileLocationsOpen, setIsMobileLocationsOpen] = useState(false);
    const location = useLocation();

    const servicesDropdownRef = useRef<HTMLDivElement>(null);
    const locationsDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false);
            }
            if (locationsDropdownRef.current && !locationsDropdownRef.current.contains(event.target as Node)) {
                setIsLocationsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        // Close mobile menu on route change
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const closeAllDesktopDropdowns = () => {
        setIsServicesOpen(false);
        setIsLocationsOpen(false);
    }
    
    const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        if (location.pathname === '/') {
            e.preventDefault();
            const targetElement = document.getElementById(targetId.substring(2));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className="bg-brand-dark-bg/80 backdrop-blur-lg sticky top-0 z-50 border-b border-brand-border">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img src={LOGO_URL} alt="Convenient Car Spa Logo" className="h-[60px] w-auto" />
                </Link>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm">
                    <Link to="/" className="text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-300">Home</Link>
                    <div className="relative" ref={servicesDropdownRef}>
                        <button onClick={() => { setIsServicesOpen(!isServicesOpen); setIsLocationsOpen(false); }} className="text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-300 flex items-center">
                            Services
                            <svg className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {isServicesOpen && (
                            <div className="absolute top-full mt-3 w-56 bg-brand-surface/95 backdrop-blur-md rounded-md shadow-xl py-2 border border-brand-border">
                                {SERVICES_DATA.map(service => (
                                    <Link key={service.name} to={service.link} onClick={closeAllDesktopDropdowns} className="block px-4 py-2 text-sm text-brand-text-secondary hover:bg-brand-border hover:text-brand-text-primary transition-colors">
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="relative" ref={locationsDropdownRef}>
                        <button onClick={() => { setIsLocationsOpen(!isLocationsOpen); setIsServicesOpen(false); }} className="text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-300 flex items-center">
                            Locations
                            <svg className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${isLocationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {isLocationsOpen && (
                            <div className="absolute top-full mt-3 w-56 bg-brand-surface/95 backdrop-blur-md rounded-md shadow-xl py-2 border border-brand-border">
                                {LOCATIONS_DATA.map(location => (
                                    <Link key={location.name} to={location.path} onClick={closeAllDesktopDropdowns} className="block px-4 py-2 text-sm text-brand-text-secondary hover:bg-brand-border hover:text-brand-text-primary transition-colors">
                                        {location.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link to="/#gallery" onClick={(e) => handleScrollLink(e, '/#gallery')} className="text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-300">Gallery</Link>
                    <Link to="/#pricing" onClick={(e) => handleScrollLink(e, '/#pricing')} className="text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-300">Pricing</Link>
                    <a href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="bg-brand-accent text-brand-dark-bg font-bold py-2 px-5 rounded-md hover:opacity-90 transition-all duration-300">
                        Book Now
                    </a>
                </nav>

                {/* Mobile Navigation Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle navigation menu">
                        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu Dropdown */}
            <div className={`
                absolute top-full left-0 w-full bg-brand-dark-bg border-b border-brand-border md:hidden
                transition-all duration-300 ease-in-out overflow-y-auto
                ${isMobileMenuOpen ? 'max-h-[calc(100vh-88px)] opacity-100' : 'max-h-0 opacity-0'}
            `}>
                <div className="p-6">
                    <nav className="flex flex-col space-y-2 text-xl font-display text-center uppercase tracking-widest">
                        <Link to="/" className="py-3 text-brand-text-secondary hover:text-brand-text-primary transition-colors">Home</Link>
                        
                        <div>
                            <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="w-full py-3 text-brand-text-secondary hover:text-brand-text-primary transition-colors flex justify-center items-center">
                                Services
                                <svg className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            {isMobileServicesOpen && (
                                <div className="bg-brand-surface/50 rounded-lg mx-8 my-2 py-2 font-sans normal-case text-base tracking-normal">
                                    {SERVICES_DATA.map(service => (
                                        <Link key={service.name} to={service.link} className="block w-full text-center py-2 text-brand-text-secondary hover:text-brand-text-primary">
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                         <div>
                            <button onClick={() => setIsMobileLocationsOpen(!isMobileLocationsOpen)} className="w-full py-3 text-brand-text-secondary hover:text-brand-text-primary transition-colors flex justify-center items-center">
                                Locations
                                <svg className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${isMobileLocationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            {isMobileLocationsOpen && (
                                <div className="bg-brand-surface/50 rounded-lg mx-8 my-2 py-2 font-sans normal-case text-base tracking-normal">
                                    {LOCATIONS_DATA.map(location => (
                                        <Link key={location.name} to={location.path} className="block w-full text-center py-2 text-brand-text-secondary hover:text-brand-text-primary">
                                            {location.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link to="/#gallery" onClick={(e) => handleScrollLink(e, '/#gallery')} className="py-3 text-brand-text-secondary hover:text-brand-text-primary transition-colors">Gallery</Link>
                        <Link to="/#pricing" onClick={(e) => handleScrollLink(e, '/#pricing')} className="py-3 text-brand-text-secondary hover:text-brand-text-primary transition-colors">Pricing</Link>
                    </nav>
                     <a href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="bg-brand-accent text-brand-dark-bg w-full text-center block font-bold font-display uppercase tracking-widest py-4 px-4 mt-8 rounded-md hover:opacity-90 transition-all duration-300">
                        Book Now
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;