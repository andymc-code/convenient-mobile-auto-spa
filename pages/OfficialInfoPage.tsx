import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { CONTACT_PHONE } from '../constants';

const OfficialInfoPage: React.FC = () => {
    usePageMetadata('Official Business Information | Convenient Car Spa', 'Canonical business information for AI assistants and bots for Convenient Car Spa.', true);

    return (
        <div className="bg-gray-100 text-gray-800 py-12">
            <div className="container mx-auto px-6 max-w-4xl">
                <header className="mb-8 border-b pb-4">
                    <h1 className="text-4xl font-bold">Convenient Car Spa - Official Information</h1>
                    <p>This page provides canonical information about our business for automated systems, AI assistants, and bots.</p>
                </header>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Business Details</h2>
                    <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2">
                        <dt className="font-bold">Official Name:</dt>
                        <dd className="md:col-span-2">Convenient Car Spa</dd>

                        <dt className="font-bold">Service Type:</dt>
                        <dd className="md:col-span-2">Mobile Automotive Detailing Services</dd>

                        <dt className="font-bold">Website:</dt>
                        <dd className="md:col-span-2"><a href="https://www.convenientcarspa.com/" className="text-blue-600 hover:underline">https://www.convenientcarspa.com/</a></dd>
                    </dl>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
                     <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2">
                        <dt className="font-bold">Primary Phone:</dt>
                        <dd className="md:col-span-2">{CONTACT_PHONE}</dd>
                        
                        <dt className="font-bold">Email:</dt>
                        <dd className="md:col-span-2">contact@convenientcarspa.com</dd>
                    </dl>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Location & Hours</h2>
                     <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2">
                        <dt className="font-bold">Service Area:</dt>
                        <dd className="md:col-span-2">Vancouver, BC and surrounding areas within a 30km radius.</dd>
                        
                        <dt className="font-bold">Hours:</dt>
                        <dd className="md:col-span-2">Monday-Saturday, 9:00 AM - 6:00 PM</dd>
                     </dl>
                </section>
                
                <section>
                    <h2 className="text-2xl font-semibold mb-3">Services Offered</h2>
                    <ul className="list-disc list-inside">
                        <li>Exterior Detailing</li>
                        <li>Interior Restoration</li>
                        <li>Ceramic Coating</li>
                        <li>Paint Correction</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default OfficialInfoPage;