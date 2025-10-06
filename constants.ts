import { Service, PricingPackage, FaqItem, GalleryItem, Testimonial } from './types';

export const SERVICES_DATA: Service[] = [
  { name: 'Exterior Detailing', description: 'A complete exterior wash, decontamination, and sealant application for a brilliant, protected shine.', image: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/blue_lamborghini_washing.png?updatedAt=1758762754766', link: '/exterior-detailing' },
  { name: 'Interior Restoration', description: 'A deep clean of every interior surface to restore that fresh, new-car feeling.', image: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Interior%20Restoration_card.png', link: '/interior-restoration' },
  { name: 'Ceramic Coating', description: 'The ultimate in long-term paint protection, gloss, and hydrophobicity.', image: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Blur_bmwm4_ceramiccoated.png?updatedAt=1759719374116', link: '/ceramic-coating' },
  { name: 'Paint Correction', description: 'Permanently remove swirls and scratches to reveal flawless, mirror-like paint.', image: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/yellow_lambo.png', link: '/paint-correction' },
  { name: 'Black Trim Restoration', description: 'Restores faded, graying plastic trim to a deep, factory-fresh black finish.', image: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Black_Trim_Restoration.png', link: '/black-trim-restoration' },
  { name: 'Odor Elimination', description: 'Permanently remove stubborn odors from smoke, pets, or mildew with our deep clean and ozone treatment.', image: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Odor_Elimination.png', link: '/odor-elimination' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { quote: "The paint correction work was flawless. I’ve had detailing done elsewhere, but the level of care and precision here is unmatched. It’s truly a showroom finish, delivered right to my driveway.", name: "Andrew", location: "West Vancouver" },
  { quote: "Booking was a breeze—just a text! Saved me a massive headache dealing with the city traffic. They showed up on time and transformed my work truck while I took calls.", name: "Marcus", location: "Burnaby" },
  { quote: "Absolutely incredible full interior detail. I thought my carpets were a lost cause, but they look and smell brand new. Highly recommend their professional team.", name: "Sarah", location: "Richmond" },
  { quote: "Best mobile detailing in the region, period. Fast, professional, and exceptional results every time.", name: "Ethan", location: "Vancouver" },
  { quote: "We use them for our small fleet. Their consistency and ability to service multiple vehicles at our business park is invaluable. Great service for a busy company.", name: "Jennifer", location: "Langley" },
  { quote: "After a tough Vancouver winter, my car needed serious help. They handled the road grime and salt residue perfectly. Ready for spring now!", name: "Kevin", location: "North Vancouver" },
  { quote: "The price for the full service was a steal considering the quality. My SUV looks better now than when I bought it. Fantastic value and great communication.", name: "David", location: "Surrey" }
];

export const PRICING_DATA: PricingPackage[] = [
    {
        title: 'Convenient Express',
        price: '$167',
        features: [
            'Thorough Hand Wash',
            'Wheel & Tire Cleaning',
            'Tire Dressing',
            'Exterior Window Cleaning',
            'Spray Sealant (3-Month Protection)'
        ],
        isFeatured: false,
    },
    {
        title: 'Convenient Plus',
        price: '$387',
        features: [
            'Everything in Express, plus:',
            'Full Paint Decontamination',
            'Durable Paint Sealant (6-Month Protection)',
            'Full Interior Vacuum',
            'Wipe Down of All Surfaces',
            'Interior Window Cleaning',
        ],
        isFeatured: true,
    },
    {
        title: 'Convenient Premier',
        price: '$790',
        features: [
            'Everything in Plus, plus:',
            'Deep Interior Shampoo',
            'Leather Cleaning & Conditioning',
            'Engine Bay Cleaning',
            'One-Step Polish & Sealant',
        ],
        isFeatured: false,
    }
];

export const GALLERY_DATA: GalleryItem[] = [
  { before: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/911_before_detail.png', after: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/911_after_detail.png', title: 'Swirl Removal & Gloss Enhancement' },
  { before: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/jeep_before_detail.png?updatedAt=1759629190001', after: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/jeep_after_detail.png?updatedAt=1759629189923', title: 'Full Interior Restoration' },
  { before: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/m4_before_hydro.png?updatedAt=1759630759476', after: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/m4_after_hydro.png?updatedAt=1759630759462', title: 'Ceramic Coating Hydrophobics' },
  { before: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/ford_raptor_before_exterior_detail.png?updatedAt=1759708679838', after: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/ford_raptor_after_exterior_detail.png?updatedAt=1759708679669', title: 'Premium Exterior Detail' },
];

export const FAQ_DATA = {
    general: [
        { question: 'Do I need to provide water or power?', answer: 'No, our mobile detailing vans are fully self-contained. We bring our own filtered water, electricity, and all the professional equipment needed to complete the job on-site.' },
        { question: 'How long does a detailing service take?', answer: 'Service times vary depending on the package and the vehicle\'s condition. An Express detail can take 1-2 hours, while a Premier package or ceramic coating can take 4-8 hours or more. We will give you a time estimate when you book.' },
        { question: 'What areas do you service?', answer: 'We primarily serve Vancouver and the Lower Mainland, including Burnaby, Richmond, West Vancouver, North Vancouver, Surrey, and Langley. If you are outside these areas, contact us for availability.' },
        { question: 'How do I pay for the service?', answer: 'We accept e-transfer or credit card payments on-site after the service is completed to your satisfaction.' }
    ],
    interior: [
        { question: 'Can you remove tough stains like coffee or ink?', answer: 'We use professional-grade stain removers and hot water extractors that are effective on most common stains. While we cannot guarantee 100% removal of all stains (especially if they have set for a long time), we have a very high success rate.' },
        { question: 'Do you remove pet hair?', answer: 'Yes, pet hair removal is a part of our interior restoration process. Please note that excessive pet hair may require additional time and incur a small surcharge, which we will discuss with you beforehand.' }
    ],
    ceramic: [
        { question: 'What is a ceramic coating?', answer: 'A ceramic coating is a liquid polymer that is applied to a vehicle\'s exterior surfaces. It chemically bonds with the factory paint, creating a semi-permanent, sacrificial layer of protection that is much more durable than traditional waxes or sealants.' },
        { question: 'How long does a ceramic coating last?', answer: 'We offer a range of coatings with different lifespans, typically from 1 to 5+ years. The longevity depends on the specific product, the vehicle\'s exposure to the elements, and how well it is maintained.' },
        { question: 'Does a ceramic coating make my car scratch-proof?', answer: 'No, a ceramic coating provides enhanced scratch resistance against very light swirl marks from washing, but it will not protect against deep scratches, rock chips, or vandalism. It adds a hardened glass layer, but it is not impenetrable armor.' }
    ],
    paint: [
        { question: 'What is paint correction?', answer: 'Paint correction is the process of machine polishing a vehicle\'s paint to remove imperfections like swirl marks, light scratches, water spots, and oxidation. This restores the paint to a better-than-new condition with incredible gloss and clarity.' },
        { question: 'Will paint correction remove all scratches?', answer: 'It can permanently remove imperfections that are within the clear coat layer of the paint. If a scratch is deep enough to have gone through the clear coat (you can feel it with your fingernail), it may not be fully removable but its appearance can often be greatly improved.' }
    ],
    mold: [
        { question: 'Is mold in my car a health risk?', answer: 'Absolutely. Mold spores can cause a range of health issues, including respiratory problems, allergies, and headaches. It is crucial to have it professionally removed to ensure the air quality in your vehicle is safe.' },
        { question: 'What causes mold to grow in a car?', answer: 'Mold thrives in damp, dark environments. Common causes include a water leak from a bad seal, leaving windows open in the rain, or spilling liquids that are not cleaned up properly. Vancouver\'s damp climate can accelerate growth.' },
        { question: 'Can I just clean the visible mold myself?', answer: 'We strongly advise against it. Simply wiping the surface does not kill the underlying spores, and improper cleaning can spread them throughout the vehicle. Our professional process uses specialized biocides and equipment like ozone generators to ensure complete eradication.' },
    ],
    trim: [
        { question: 'What causes black plastic trim to fade?', answer: 'The primary cause is prolonged exposure to ultraviolet (UV) rays from the sun, which breaks down the polymers in the plastic. Harsh car wash chemicals and road grime can also accelerate this process, leaving the trim looking gray and chalky.' },
        { question: 'Is this a temporary dressing or a permanent fix?', answer: 'This is a restoration, not just a dressing. While dressings are often silicone-based, oily, and wash off quickly, our process deeply cleans the plastic and applies a semi-permanent dye that soaks into the material, restoring its original black color for many months or even years.'},
        { question: 'Will the restored trim look shiny or greasy?', answer: 'No, our goal is a factory-fresh satin finish. The restored trim will look deep, rich, and black, not artificially shiny or greasy. It also dries to the touch and will not run in the rain.'}
    ],
    odor: [
        { question: 'What is an ozone treatment?', answer: 'An ozone treatment involves using a professional ozone (O3) generator inside a sealed vehicle. Ozone is a highly reactive molecule that chemically neutralizes and destroys odor-causing bacteria, viruses, and other organic matter at its source, rather than just masking the smell.'},
        { question: 'Is the process safe for my car and my health?', answer: 'Yes, it is completely safe for your vehicle\'s interior when performed by trained professionals. After the treatment, the vehicle is thoroughly aired out to allow the ozone to revert back to stable, breathable oxygen. The car will be perfectly safe to drive.'},
        { question: 'What kinds of odors can you remove?', answer: 'Our two-step process of deep cleaning followed by an ozone treatment is highly effective against a wide range of stubborn odors, including cigarette and cannabis smoke, pet odors, spilled food or milk, and musty smells from mold or mildew.'},
    ]
};

export const CONTACT_PHONE = "+1-604-555-0101";
export const DEFAULT_WHATSAPP_MESSAGE = "Hi! I'd like to get a quote for mobile detailing.";

export const getWhatsAppLink = (message: string): string => {
    const encodedMessage = encodeURIComponent(message);
    const phone = CONTACT_PHONE.replace(/[^0-9]/g, '');
    return `https://wa.me/${phone}?text=${encodedMessage}`;
};

export const LOCATIONS_DATA = [
    { name: 'Vancouver', path: '/locations/vancouver/mobile-car-detailing' },
    { name: 'Burnaby', path: '/locations/burnaby/mobile-car-detailing' },
    { name: 'Richmond', path: '/locations/richmond/mobile-car-detailing' },
    { name: 'West Vancouver', path: '/locations/west-vancouver/mobile-car-detailing' },
    { name: 'Surrey', path: '/locations/surrey/mobile-car-detailing' },
    { name: 'Langley', path: '/locations/langley/mobile-car-detailing' },
    { name: 'North Vancouver', path: '/locations/north-vancouver/mobile-car-detailing' },
];