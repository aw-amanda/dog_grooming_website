import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import HeaderImage from "@/public/dalmation.png";
import ServiceIcon from "@/public/pug.png";
import {
  ctaButtons,
  homePageContent,
  seoMetadata,
  keywordLists,
  testimonials,
  servicesList,
  faqs,
  structuredData,
  paragraphs,
} from "../lib/data";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aw-amanda.github.io/dog_grooming_website/';

export const metadata: Metadata = {
  title: seoMetadata.home.title,
  description: seoMetadata.home.description,
  keywords: seoMetadata.home.keywords,
  openGraph: {
    title: seoMetadata.home.openGraph.title,
    description: seoMetadata.home.openGraph.description,
    type: "website",
    locale: "en_US",
    siteName: "Best Dog Grooming Services",
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Best Dog Grooming Services - Professional Pet Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoMetadata.home.title,
    description: seoMetadata.home.description,
    images: [`${baseUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...structuredData.localBusiness,
        "url": baseUrl,
        "image": `${baseUrl}/og-image.jpg`,
        "telephone": "(555) 123-GROOM",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Main Street",
          "addressLocality": "Your City",
          "addressRegion": "Your State",
          "postalCode": "12345",
          "addressCountry": "US"
        }
      },
      structuredData.serviceSchema,
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="structured-data"
      />

      <div className="flex min-h-screen flex-col bg-primary pt-18">
        <main className="flex-1" id="main-content" role="main">
          {/* Hero Section */}
          <section 
            className="container mx-auto px-4 py-12"
            aria-labelledby="hero-heading"
          >
            <header className="w-full p-2 flex flex-col items-center justify-center text-center gap-y-5">
              <h1 
                id="hero-heading"
                className="text-tertiary text-3xl md:text-5xl text-shadow-lg font-bold"
              >
                {homePageContent.heroTitle}
              </h1>
              <div className="relative w-full max-w-3xl">
                <Image
                  src={HeaderImage}
                  alt="Professional dog grooming service - happy dog after grooming"
                  className="object-contain overflow-hidden w-full"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                  width={1024}
                  height={768}
                />
              </div>
              <p className="text-secondary text-lg md:text-2xl text-shadow-md my-2 md:my-4">
                {homePageContent.heroSubtitle}
              </p>
              <div 
                className="w-full h-0.5 my-4 md:my-6 bg-linear-to-r from-transparent via-yellow-50 to-transparent"
                role="presentation"
                aria-hidden="true"
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-tertiary text-white px-6 py-3 rounded-lg font-semibold hover:bg-tertiary/90 
                           transition-colors focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-offset-2"
                  aria-label="Schedule an appointment for your dog"
                >
                  {ctaButtons.schedule}
                </Link>
                <Link
                  href="/services"
                  className="bg-white/20 text-tertiary border border-tertiary px-6 py-3 rounded-lg font-semibold 
                           hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-tertiary 
                           focus:ring-offset-2"
                  aria-label="Learn more about our dog grooming services"
                >
                  {ctaButtons.learnMore}
                </Link>
              </div>
            </header>
          </section>

          {/* Intro Section */}
          <section 
            className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12"
            aria-labelledby="intro-heading"
          >
            <div className="text-center">
              <h2 
                id="intro-heading"
                className="text-tertiary text-3xl md:text-4xl font-bold mb-6"
              >
                The Best Dog Grooming Services in Your Area
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {homePageContent.introParagraph}
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section 
            className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12"
            aria-labelledby="benefits-heading"
          >
            <h2 
              id="benefits-heading"
              className="text-2xl font-bold mt-8 mb-4 text-tertiary text-center"
            >
              Why Choose the Best Dog Groomer in Your Area?
            </h2>
            <div 
              className="bg-yellow-50/25 backdrop-blur-xs p-6 rounded-lg shadow"
              role="list"
            >
              <div className="grid md:grid-cols-2 gap-3">
                {keywordLists.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2" role="listitem">
                    <span 
                      className="text-tertiary font-bold text-lg" 
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section 
            className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12"
            aria-labelledby="services-heading"
          >
            <h2 
              id="services-heading"
              className="text-2xl font-bold mt-8 mb-4 text-tertiary text-center"
            >
              Our Professional Dog Grooming Services
            </h2>
            <p className="text-gray-700 mb-6 text-center">{paragraphs.servicesDesc}</p>
            <div 
              className="grid md:grid-cols-2 gap-4"
              role="list"
            >
              {servicesList.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-yellow-50/25 backdrop-blur-xs p-4 rounded-lg shadow"
                  role="listitem"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-10 h-10 bg-tertiary/10 rounded-full flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <Image
                        src={ServiceIcon}
                        alt="service icon"
                        className="w-6 h-6 object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                        width={24}
                        height={24}
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-tertiary">{service.name}</h3>
                  </div>
                  <p className="text-gray-700">{service.description}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="sr-only">Duration: </span>
                    {service.duration}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/services"
                className="inline-block bg-tertiary text-white px-6 py-3 rounded-lg font-semibold 
                         hover:bg-tertiary/90 transition-colors focus:outline-none focus:ring-2 
                         focus:ring-tertiary focus:ring-offset-2"
                aria-label="View all dog grooming services"
              >
                {ctaButtons.learnMore}
              </Link>
            </div>
          </section>

          {/* Service Area Section */}
          <section 
            className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12"
            aria-labelledby="service-area-heading"
          >
            <h2 
              id="service-area-heading"
              className="text-2xl font-bold mt-8 mb-4 text-tertiary text-center"
            >
              Professional Dog Grooming Service Areas
            </h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {paragraphs.serviceAreaIntro}
            </p>
            <div className="bg-yellow-50/25 backdrop-blur-xs p-6 rounded-lg shadow mb-8">
              <h3 className="font-semibold text-lg text-tertiary mb-3">Primary Service Area</h3>
              <div 
                className="grid md:grid-cols-2 gap-3"
                role="list"
              >
                {['Your City Downtown', 'Your City Westside', 'Your City Eastside', 'North Your City', 'South Your City'].map((area, index) => (
                  <div key={index} className="flex items-center gap-2" role="listitem">
                    <span className="text-tertiary font-bold text-lg" aria-hidden="true">✓</span>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-yellow-50/25 backdrop-blur-xs p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg text-tertiary mb-3">Surrounding Communities</h3>
              <div 
                className="grid md:grid-cols-2 gap-3"
                role="list"
              >
                {['Nearby Town', 'Suburban Heights', 'Riverside District', 'Meadowbrook', 'Lakeview Estates'].map((area, index) => (
                  <div key={index} className="flex items-center gap-2" role="listitem">
                    <span className="text-tertiary font-bold text-lg" aria-hidden="true">✓</span>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                *Don't see your neighborhood? Contact us - we're expanding regularly!
              </p>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/service-area"
                className="inline-block bg-tertiary text-white px-6 py-3 rounded-lg font-semibold 
                         hover:bg-tertiary/90 transition-colors focus:outline-none focus:ring-2 
                         focus:ring-tertiary focus:ring-offset-2"
                aria-label="View our full service area"
              >
                View Full Service Area
              </Link>
            </div>
          </section>

          {/* Testimonials Section */}
          <section 
            className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12"
            aria-labelledby="testimonials-heading"
          >
            <h2 
              id="testimonials-heading"
              className="text-2xl font-bold mt-8 mb-4 text-tertiary text-center"
            >
              What Pet Parents Say About Us
            </h2>
            <div 
              className="grid md:grid-cols-2 gap-4"
              role="list"
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-yellow-50/25 backdrop-blur-xs p-5 rounded-lg shadow"
                  role="listitem"
                >
                  <div className="flex mb-2" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <blockquote>
                    <p className="italic text-gray-700 mb-3">"{testimonial.text}"</p>
                    <footer className="font-semibold text-tertiary">- {testimonial.author}</footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section 
            className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12"
            aria-labelledby="faq-heading"
          >
            <h2 
              id="faq-heading"
              className="text-2xl font-bold mt-8 mb-4 text-tertiary text-center"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.slice(0, 4).map((faq, index) => (
                <div key={index} className="bg-yellow-50/25 backdrop-blur-xs p-5 rounded-lg shadow">
                  <h3 className="font-semibold text-lg text-tertiary">{faq.question}</h3>
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section 
            className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12"
            aria-labelledby="cta-heading"
          >
            <div className="text-center bg-yellow-50/40 backdrop-blur-xs p-8 rounded-lg shadow">
              <h3 
                id="cta-heading"
                className="text-2xl font-bold text-tertiary mb-4"
              >
                Ready to Give Your Dog the Best Grooming Experience?
              </h3>
              <p className="mb-6 text-gray-700">{paragraphs.ctaParagraph}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-tertiary text-white px-6 py-3 rounded-lg font-semibold 
                           hover:bg-tertiary/90 transition-colors focus:outline-none focus:ring-2 
                           focus:ring-tertiary focus:ring-offset-2"
                  aria-label="Schedule an appointment now"
                >
                  {ctaButtons.schedule}
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/20 text-tertiary border border-tertiary px-6 py-3 rounded-lg font-semibold 
                           hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 
                           focus:ring-tertiary focus:ring-offset-2"
                  aria-label="Get a free quote for dog grooming services"
                >
                  {ctaButtons.getQuote}
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}