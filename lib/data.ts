// ===============
// METADATA
// ===============
export const seoMetadata = {
  home: {
    title: "The Best Dog Groomer in Your Area | Professional Pet Care",
    description: "Find the best dog grooming services in your area. Professional groomers, affordable rates, and loving care for your furry friends. Book your appointment today!",
    keywords: ["dog grooming", "best dog groomer", "pet grooming", "dog wash", "mobile dog grooming", "affordable dog grooming"],
    openGraph: {
      title: "The Best Dog Grooming Services in Your Area",
      description: "Professional, loving, and affordable dog grooming services right in your neighborhood.",
    }
  },
  about: {
    title: "About the Best Dog Grooming Services in Your Area | Our Story",
    description: "Learn why we're the best dog grooming service in your area. Experienced groomers, state-of-the-art equipment, and genuine love for dogs. Serving your neighborhood with pride.",
    keywords: ["about dog groomer", "professional dog groomer", "pet care specialists", "dog grooming experts"],
    openGraph: {
      title: "About The Best Dog Grooming Services - Your Area's Top Choice",
      description: "Discover our commitment to providing the best dog grooming services in your area. Quality care you can trust.",
    }
  },
  services: {
    title: "Professional Dog Grooming Services in Your Area | Full Service Care",
    description: "Explore our complete range of dog grooming services in your area. From bathing to styling, we provide the best care for your beloved pet.",
    keywords: ["full service dog grooming", "dog bathing", "dog haircut", "nail trimming", "ear cleaning"],
  },
  serviceArea: {
    title: "Professional Dog Grooming Service Area | Serving Your City and Surrounding Communities",
    description: "The best dog grooming services now available in Your City and surrounding areas. Professional, affordable, and loving pet care right in your neighborhood. Book today!",
    keywords: ["dog grooming service area", "mobile dog groomer near me", "pet grooming Your City", "professional dog groomer Your Area", "dog wash nearby"],
  },
  contact: {
    title: "Contact The Best Dog Groomer in Your Area | Book an Appointment",
    description: "Ready to give your dog the best grooming experience? Contact us today to schedule an appointment. Serving dog owners in your area with exceptional care.",
    keywords: ["book dog grooming", "dog groomer appointment", "contact pet groomer"],
  }
};

export const getMetaKeywords = (page: keyof typeof seoMetadata): string => {
  return seoMetadata[page].keywords.join(", ");
};

export const headings = {
  mainHeading: "The Best Dog Grooming Services in Your Area",
  ctaHeading: "Ready to Give Your Dog the Best Grooming Experience?",
  whyUsHeading: "Why Choose the Best Dog Groomer in Your Area?",
  servicesHeading: "Our Professional Dog Grooming Services",
  testimonialsHeading: "What Pet Parents Say About Us",
  bookingHeading: "Schedule Your Dog's Grooming Appointment Today",
};

export const paragraphs = {
  intro: "At The Best Dog Grooming Services in Your Area, we combine professional expertise with genuine love for animals. Our certified groomers provide personalized care that keeps your furry friend looking and feeling their absolute best.",
  whyChooseUs: "When searching for the best dog groomer in your area, you need someone who understands both pet care and customer service. Our team brings years of experience, state-of-the-art equipment, and a gentle touch to every grooming session.",
  servicesDesc: "We offer comprehensive dog grooming services designed to meet every breed's unique needs. From puppy's first groom to senior dog care, our services adapt to your pet's comfort level.",
  serviceAreaIntro: `Finding a trustworthy dog groomer in your area shouldn't be a challenge. We've made it our mission to bring the best dog grooming services directly to your doorstep. Whether you're in downtown Your City or the surrounding suburbs, our professional groomers are ready to pamper your pup with exceptional care.`,
  processIntro: "Our proven grooming process ensures your dog feels safe, comfortable, and pampered throughout their visit. Here's what happens when you choose the best dog grooming services in your area:",
  ctaParagraph: "Don't wait to give your furry friend the pampering they deserve. Contact the best dog groomer in your area today and see the difference professional care makes.",
  contactDescription: "Ready to give your furry friend the pampering they deserve? Fill out the form below and our team will reach out within 24 hours to schedule your appointment or answer any questions you may have about our professional dog grooming services.",
};

// ==================
// SEO KEYWORDS
// ==================
export const keywordLists = {
  services: [
    "Full-service dog grooming",
    "Professional dog bathing",
    "Breed-specific haircuts",
    "Nail trimming and filing",
    "Ear cleaning and plucking",
    "Teeth brushing",
    "Anal gland expression",
    "De-shedding treatments",
    "Paw pad trimming",
    "Sanitary trimming",
    "Flea and tick treatments",
    "Puppy grooming packages",
    "Senior dog gentle grooming",
    "Mobile dog grooming options",
  ],
  
  benefits: [
    "Experienced and certified groomers",
    "Gentle handling techniques",
    "High-quality, pet-safe products",
    "State-of-the-art equipment",
    "Stress-free environment",
    "Competitive, affordable rates",
    "Flexible scheduling options",
    "Personalized grooming plans",
    "Same-day services available",
    "Free consultations",
  ],
  
  breedsWeServe: [
    "Goldendoodles",
    "Labradors",
    "German Shepherds",
    "French Bulldogs",
    "Poodles",
    "Golden Retrievers",
    "Beagles",
    "Dachshunds",
    "Boxers",
    "Shih Tzus",
    "Yorkies",
    "Maltese",
    "Huskies",
    "Great Danes",
  ],
  
  qualities: [
    "Trustworthy",
    "Professional",
    "Loving",
    "Experienced",
    "Patient",
    "Detail-oriented",
    "Certified",
    "Insured",
    "Reliable",
    "Affordable",
  ],
};

// ==============
// CTA
// ==============
export const ctaButtons = {
  schedule: "Schedule an Appointment",
  learnMore: "Learn More About Our Services",
  contactUs: "Contact the Best Dog Groomer",
  viewPricing: "View Our Grooming Prices",
  callNow: "Call Now to Book",
  getQuote: "Get a Free Quote",
  sendMessage: "Send Message",
};

// ================
// TESTIMONIALS
// ================
export const testimonials = [
  {
    text: "The best dog grooming service I've ever used! My pup actually looks forward to his appointments now.",
    author: "Sarah M.",
    rating: 5,
  },
  {
    text: "Professional, caring, and affordable. So glad I found the best dog groomer in our area!",
    author: "Michael T.",
    rating: 5,
  },
  {
    text: "They handled my anxious dog with such patience and skill. Highly recommend their services!",
    author: "Jennifer L.",
    rating: 5,
  },
  {
    text: "Amazing attention to detail and my dog smells great for weeks! Worth every penny.",
    author: "David R.",
    rating: 5,
  },
];

// =========
// FAQS
// =========
export const faqs = [
  {
    question: "How often should my dog be groomed?",
    answer: "Most dogs benefit from grooming every 4-6 weeks, but this varies by breed, coat type, and lifestyle. The best dog grooming services in your area will create a custom schedule for your pet."
  },
  {
    question: "Do you offer mobile dog grooming services?",
    answer: "Yes! We bring the best dog grooming services directly to your doorstep. Our mobile units are fully equipped for professional grooming right in your driveway."
  },
  {
    question: "How much do your dog grooming services cost?",
    answer: "Prices vary based on breed, size, and services needed. Contact the best dog groomer in your area for a personalized quote - we offer competitive rates for all services."
  },
  {
    question: "Do you groom all dog breeds?",
    answer: "Absolutely! Our experienced groomers work with all breeds - from Chihuahuas to Great Danes. We specialize in breed-specific cuts and care requirements."
  },
  {
    question: "What products do you use for grooming?",
    answer: "We use only premium, hypoallergenic, and pet-safe products. The best dog grooming services prioritize your pet's health and comfort with every product we use."
  }
];

export const serviceAreaFaqs = [
  {
    question: "Do you offer dog grooming services throughout all of Your City?",
    answer: "Yes! We proudly serve the entire Your City metropolitan area and many surrounding communities. Our goal is to make the best dog grooming services accessible to every pet parent in our region."
  },
  {
    question: "Is there an extra fee for mobile grooming services in Your Area?",
    answer: "We offer competitive pricing for both in-salon and mobile grooming. While mobile services may have a small travel fee depending on your location, we keep our prices affordable so every dog can receive professional care."
  },
  {
    question: "How far in advance should I book my dog's grooming appointment in Your City?",
    answer: "We recommend booking 1-2 weeks in advance for standard appointments. However, we do keep some same-week availability for existing clients and urgent needs. Contact the best dog groomer in your area today to check availability!"
  },
  {
    question: "Which neighborhoods in Your City do you serve?",
    answer: "We cover all major neighborhoods in Your City including downtown, westside, eastside, and north/south suburbs. If you're unsure about your specific location, give us a call - we likely serve your area!"
  },
  {
    question: "Do you groom all dog breeds in Your City?",
    answer: "Absolutely! From tiny Chihuahuas to giant Great Danes, our experienced groomers work with all breeds. We specialize in breed-specific cuts and have experience with both common and rare dog breeds."
  }
];

export const servicesList = [
  {
    name: "Luxury Bath & Brush",
    description: "Complete cleansing with premium shampoos, conditioning treatment, and thorough brushing to remove loose fur and mats.",
    duration: "30-45 min",
  },
  {
    name: "Full Groom Package",
    description: "Everything your dog needs: bath, haircut, nail trim, ear cleaning, teeth brushing, and sanitary trim.",
    duration: "60-90 min",
  },
  {
    name: "Express Groom",
    description: "Quick bath, blow-dry, nail trim, and light tidy-up for dogs who prefer shorter sessions.",
    duration: "30 min",
  },
  {
    name: "Pamper Package",
    description: "Our most luxurious service including aromatherapy bath, blueberry facial, paw balm treatment, and cologne spritz.",
    duration: "90-120 min",
  },
];

const primaryAreas = [
  "Your City Downtown",
  "Your City Westside",
  "Your City Eastside",
  "North Your City",
  "South Your City",
];

const surroundingAreas = [
  "Nearby Town",
  "Suburban Heights",
  "Riverside District",
  "Meadowbrook",
  "Lakeview Estates",
  "Green Acres",
  "Pleasant Valley",
  "Oakwood Hills",
];

const mobileBenefits = [
  "No travel stress for your dog",
  "Convenient scheduling at your location",
  "Same professional equipment as our salon",
  "Perfect for busy pet parents",
  "Ideal for multi-dog households",
];

const bookingSteps = [
  "Call or book online to schedule your appointment",
  "Confirm your service area eligibility",
  "We arrive at your location at the scheduled time",
  "Professional grooming consultation before we begin",
  "Your dog receives the best grooming experience in your area",
  "Final walkthrough to ensure your complete satisfaction",
];

export const serviceAreaContent = {
  headings: {
    main: "Dog Grooming Services in Your City & Surrounding Areas",
  },
  subheading: "Professional pet care delivered right to your neighborhood",
  primaryArea: {
    heading: "Our Primary Service Area",
    areas: primaryAreas,
  },
  surroundingCommunities: {
    heading: "Surrounding Communities We Serve",
    areas: surroundingAreas,
    note: "*Don't see your neighborhood? Contact us - we're expanding our service area regularly!"
  },
  mobileGrooming: {
    heading: "Mobile Dog Grooming Available Throughout Your Area",
    description: `Can't make it to our salon? No problem! Our mobile grooming units bring the best dog grooming services in your area directly to your home or office. Fully equipped with professional-grade equipment, our mobile vans provide the same quality service with added convenience.`,
    benefits: mobileBenefits,
  },
  whatToExpect: {
    heading: "What to Expect When You Book with Us",
    steps: bookingSteps,
  },
  faqs: serviceAreaFaqs,
};

export const contactPageContent = {
  headings: {
    main: "Contact the Best Dog Groomer in Your Area",
  },
  description: paragraphs.contactDescription,
  contactInfo: {
    phone: "(555) 123-GROOM",
    email: "hello@bestdoggroomer.com",
    address: "123 Main Street, Your City, Your State 12345",
    hours: "Mon-Sat: 9am - 6pm",
  },
};

// ====================
// STRUCTURED DATA
// ====================
export const structuredData = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Best Dog Grooming Services",
    "description": "Professional dog grooming services in your area. Expert groomers, quality care, affordable prices.",
    "areaServed": "Your Area",
    "serviceType": "Dog Grooming",
    "priceRange": "$$",
    "openingHours": "Mon-Sat 9am-6pm",
  },
  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dog Grooming",
    "provider": {
      "@type": "ProfessionalService",
      "name": "The Best Dog Groomer in Your Area"
    },
    "areaServed": {
      "@type": "City",
      "name": "Your Area"
    }
  }
};

export const blogTopics = [
  "5 Signs Your Dog Needs Professional Grooming Services",
  "How to Choose the Best Dog Groomer in Your Area",
  "Seasonal Dog Grooming Tips Every Owner Should Know",
  "The Benefits of Regular Professional Dog Grooming",
  "Common Dog Grooming Mistakes to Avoid",
];

export const groomingProcessSteps = [
  "Welcome and consultation to understand your dog's needs",
  "Gentle brushing to remove tangles",
  "Luxury bath with premium products",
  "Professional blow-dry",
  "Precision haircut and styling",
  "Nail care and paw treatment",
  "Ear cleaning and teeth brushing",
  "Final inspection and owner consultation",
];

// ============================================
// PAGE-SPECIFIC CONTENT AGGREGATORS
// ============================================
export const homePageContent = {
  heroTitle: "The Best Dog Groomer in Your Area",
  heroSubtitle: "Quality dog grooming services at affordable rates.",
  mainHeading: headings.mainHeading,
  introParagraph: paragraphs.intro,
  benefits: keywordLists.benefits,
  ctaText: ctaButtons.schedule,
};

export const aboutPageContent = {
  headings: {
    main: "About the Best Dog Grooming Service in Your Area",
    whyChooseUs: headings.whyUsHeading,
    services: headings.servicesHeading,
    testimonials: headings.testimonialsHeading,
  },
  introParagraph: paragraphs.whyChooseUs,
  benefits: keywordLists.benefits,
  servicesList: servicesList,
  testimonials: testimonials,
};

export const servicesPageContent = {
  headings: {
    main: "The Best Professional Dog Grooming Services in Your Area",
    process: "Our Gentle Grooming Process",
    pricing: "Affordable Dog Grooming Packages",
  },
  servicesList: servicesList,
  processSteps: groomingProcessSteps,
  faqs: faqs,
};

export const siteContent = {
  seo: seoMetadata,
  headings,
  paragraphs,
  keywordLists,
  ctaButtons,
  testimonials,
  faqs,
  serviceAreaFaqs,
  servicesList,
  structuredData,
  blogTopics,
  groomingProcessSteps,
  serviceAreaContent,
  contactPageContent,
  homePageContent,
  aboutPageContent,
  servicesPageContent,
};