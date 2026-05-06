// app/page.tsx
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
} from "./data";

// Dynamic metadata for SEO
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
  },
  twitter: {
    card: "summary_large_image",
    title: seoMetadata.home.title,
    description: seoMetadata.home.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  // Schema.org structured data for rich snippets
  const jsonLd = {
    ...structuredData.localBusiness,
    ...structuredData.serviceSchema,
  };

  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex min-h-screen flex-col bg-primary pt-18">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-12">
            <header className="w-full p-2 flex flex-col items-center justify-center text-center gap-y-5">
              <h1 className="text-tertiary text-3xl md:text-5xl text-shadow-lg font-bold">
                {homePageContent.heroTitle}
              </h1>
              <Image
                src={HeaderImage}
                alt="Professional dog grooming service - happy dog after grooming"
                className="object-contain overflow-hidden w-full max-w-3xl"
                priority
              />
              <p className="text-secondary text-lg md:text-2xl text-shadow-md my-2 md:my-4">
                {homePageContent.heroSubtitle}
              </p>
              <div className="w-full h-0.5 my-4 md:my-6 bg-linear-to-r from-transparent via-yellow-50 to-transparent" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-tertiary text-white px-6 py-3 rounded-lg font-semibold hover:bg-tertiary/90 transition-colors"
                >
                  {ctaButtons.schedule}
                </Link>
                <Link
                  href="/services"
                  className="bg-white/20 text-tertiary border border-tertiary px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                >
                  {ctaButtons.learnMore}
                </Link>
              </div>
            </header>
          </section>

          {/* Intro Section */}
          <div className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12">
            <div className="text-center">
              <h2 className="text-tertiary text-3xl md:text-4xl font-bold mb-6">
                The Best Dog Grooming Services in Your Area
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {homePageContent.introParagraph}
              </p>
            </div>
          </div>

          {/* Why Choose Us - Benefits Section */}
          <div className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-tertiary text-center">
              Why Choose the Best Dog Groomer in Your Area?
            </h2>
            <div className="bg-yellow-50/25 backdrop-blur-xs p-6 rounded-lg shadow">
              <div className="grid md:grid-cols-2 gap-3">
                {keywordLists.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-tertiary font-bold text-lg">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-tertiary text-center">
              Our Professional Dog Grooming Services
            </h2>
            <p className="text-gray-700 mb-6 text-center">{paragraphs.servicesDesc}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {servicesList.map((service, index) => (
                <div key={index} className="bg-yellow-50/25 backdrop-blur-xs p-4 rounded-lg shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-tertiary/10 rounded-full flex items-center justify-center">
                      <Image
                        src={ServiceIcon}
                        alt={service.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-tertiary">{service.name}</h3>
                  </div>
                  <p className="text-gray-700">{service.description}</p>
                  <p className="text-sm text-gray-600 mt-2">Duration: {service.duration}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/services"
                className="inline-block bg-tertiary text-white px-6 py-3 rounded-lg font-semibold hover:bg-tertiary/90 transition-colors"
              >
                {ctaButtons.learnMore}
              </Link>
            </div>
          </div>

          {/* Service Area Section */}
          <div className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-tertiary text-center">
              Professional Dog Grooming Service Areas
            </h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {paragraphs.serviceAreaIntro}
            </p>
            <div className="bg-yellow-50/25 backdrop-blur-xs p-6 rounded-lg shadow mb-8">
              <h3 className="font-semibold text-lg text-tertiary mb-3">Primary Service Area</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-tertiary font-bold text-lg">✓</span>
                  <span className="text-gray-700">Your City Downtown</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-tertiary font-bold text-lg">✓</span>
                  <span className="text-gray-700">Your City Westside</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-tertiary font-bold text-lg">✓</span>
                  <span className="text-gray-700">Your City Eastside</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-tertiary font-bold text-lg">✓</span>
                  <span className="text-gray-700">North Your City</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-tertiary font-bold text-lg">✓</span>
                  <span className="text-gray-700">South Your City</span>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50/25 backdrop-blur-xs p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg text-tertiary mb-3">Surrounding Communities</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-tertiary font-bold text-lg">✓</span>
                  <span className="text-gray-700">Nearby Town</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-tertiary font-bold text-lg">✓</span>
                  <span className="text-gray-700">Suburban Heights</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-tertiary font-bold text-lg">✓</span>
                  <span className="text-gray-700">Riverside District</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-tertiary font-bold text-lg">✓</span>
                  <span className="text-gray-700">Meadowbrook</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-tertiary font-bold text-lg">✓</span>
                  <span className="text-gray-700">Lakeview Estates</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                *Don't see your neighborhood? Contact us - we're expanding regularly!
              </p>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/service-area"
                className="inline-block bg-tertiary text-white px-6 py-3 rounded-lg font-semibold hover:bg-tertiary/90 transition-colors"
              >
                View Full Service Area
              </Link>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-tertiary text-center">
              What Pet Parents Say About Us
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-yellow-50/25 backdrop-blur-xs p-5 rounded-lg shadow">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">★</span>
                    ))}
                  </div>
                  <p className="italic text-gray-700 mb-3">"{testimonial.text}"</p>
                  <p className="font-semibold text-tertiary">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-tertiary text-center">
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
          </div>

          {/* CTA Section */}
          <div className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12">
            <div className="text-center bg-yellow-50/40 backdrop-blur-xs p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-tertiary mb-4">
                Ready to Give Your Dog the Best Grooming Experience?
              </h3>
              <p className="mb-6 text-gray-700">{paragraphs.ctaParagraph}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-tertiary text-white px-6 py-3 rounded-lg font-semibold hover:bg-tertiary/90 transition-colors"
                >
                  {ctaButtons.schedule}
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/20 text-tertiary border border-tertiary px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                >
                  {ctaButtons.getQuote}
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}