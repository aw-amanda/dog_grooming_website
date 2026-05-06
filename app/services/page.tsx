import Image from "next/image"
import ServiceAreaHeaderImage from "@/public/australian-shepherd.png";
import { Metadata } from "next";
import { servicesPageContent, seoMetadata, ctaButtons, paragraphs } from "@/app/data";
import Link from "next/link";

export const metadata: Metadata = {
    title: seoMetadata.services.title,
    description: seoMetadata.services.description,
    keywords: seoMetadata.services.keywords,
    openGraph: {
        title: seoMetadata.services.title,
        description: seoMetadata.services.description,
        type: "website",
        locale: "en_US",
        siteName: "Best Dog Grooming Services",
    },
    twitter: {
        card: "summary_large_image",
        title: seoMetadata.services.title,
        description: seoMetadata.services.description,
    },
    alternates: {
        canonical: "/services",
    },
};

export default function Services() {
    return(
        <div className="flex min-h-screen flex-col bg-linear-to-b from-yellow-50 via-primary to-yellow-50 pt-18">
            <main className="flex-1">
                <section className="container mx-auto px-4 py-12">
                    <header className="w-full p-2 flex flex-col items-center justify-center text-center">
                        <h1 className="text-tertiary text-5xl text-shadow-lg font-bold">
                            {servicesPageContent.headings.main}
                        </h1>
                        <Image
                            src={ServiceAreaHeaderImage}
                            alt="illustration of dog"
                            className="w-60 max-w-sm object-contain overflow-hidden mt-7"
                        />
                    </header>

                    <div className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12">
                        <h2 className="text-2xl text-center font-bold mt-8 mb-4 text-tertiary">
                            Puppy & Dog Grooming Services
                        </h2>
                        <p className="text-gray-700 mb-6">{paragraphs.servicesDesc}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            {servicesPageContent.servicesList.map((service, index) => (
                                <div key={index} className="bg-primary/80 backdrop-blur-xs p-4 rounded-lg shadow">
                                    <h3 className="font-semibold text-lg">{service.name}</h3>
                                    <p>{service.description}</p>
                                    <p className="text-sm text-gray-600 mt-2">Duration: {service.duration}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl font-bold mt-12 mb-4 text-tertiary">
                            Our Gentle Grooming Process
                        </h2>
                        <div className="bg-primary/80 backdrop-blur-xs p-6 rounded-lg shadow">
                            <p className="mb-4">{paragraphs.processIntro}</p>
                            <div className="grid md:grid-cols-2 gap-3">
                                {servicesPageContent.processSteps.map((step, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <span className="text-tertiary font-bold">✓</span>
                                        <span>{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mt-12 mb-4 text-tertiary">
                            {servicesPageContent.headings.pricing}
                        </h2>
                        <div className="bg-primary/80 backdrop-blur-xs p-6 rounded-lg shadow text-center">
                            <p className="mb-4">
                                Prices vary based on breed, size, and specific needs. Contact us for a personalized quote.
                            </p>
                            <Link 
                                href="/contact" 
                                className="inline-block bg-tertiary text-white px-6 py-3 rounded-lg font-semibold hover:bg-tertiary/90 transition-colors"
                            >
                                {ctaButtons.getQuote}
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold mt-12 mb-4 text-tertiary">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {servicesPageContent.faqs.map((faq, index) => (
                                <div key={index} className="bg-primary/80 backdrop-blur-xs p-5 rounded-lg shadow">
                                    <h3 className="font-semibold text-lg text-tertiary">{faq.question}</h3>
                                    <p className="mt-2">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center bg-primary/80 backdrop-blur-xs p-8 rounded-lg shadow">
                            <h3 className="text-2xl font-bold text-tertiary mb-4">
                                Ready to Give Your Dog the Best Grooming Experience?
                            </h3>
                            <p className="mb-6">{paragraphs.ctaParagraph}</p>
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
                                    {ctaButtons.contactUs}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}