import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, LOCATIONS_DATA, CONTACT_PHONE } from '../constants';

const LOGO_URL = "https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/convienen_detailing_logo.png?updatedAt=1759228174543";

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-surface border-t border-brand-border">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <div className="flex items-center mb-4">
                             <img src={LOGO_URL} alt="Convenient Car Spa Logo" className="h-[60px] w-auto" />
                        </div>
                        <p className="text-brand-text-secondary text-sm">Vancouver's premier mobile auto detailing service. We bring the spa to you.</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-brand-text-primary uppercase tracking-wider mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {SERVICES_DATA.map(service => (
                                <li key={service.name}><Link to={service.link} className="text-sm text-brand-text-secondary hover:text-brand-accent transition-colors">{service.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-sm font-semibold text-brand-text-primary uppercase tracking-wider mb-4">Service Areas</h3>
                        <ul className="space-y-2">
                            {LOCATIONS_DATA.map(location => (
                                <li key={location.name}><Link to={location.path} className="text-sm text-brand-text-secondary hover:text-brand-accent transition-colors">{location.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-brand-text-primary uppercase tracking-wider mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-brand-text-secondary text-sm">
                            <li>contact@convenientcarspa.com</li>
                            <li>{CONTACT_PHONE}</li>
                            <li>Serving Vancouver & The Lower Mainland</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-brand-text-secondary/50">&copy; {new Date().getFullYear()} Convenient Car Spa. All Rights Reserved.</p>
                     <p className="text-brand-text-secondary/50 mt-4 md:mt-0">
                       <Link to="/official-info" className="hover:text-brand-accent">Official Info</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;