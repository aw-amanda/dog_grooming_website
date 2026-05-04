import Image from "next/image"
import Dalmation from "@/public/best-dog-grooming-dalmation-fan.png";
import { Metadata } from "next";
import { servicesPageContent, seoMetadata, ctaButtons, paragraphs } from "@/app/data";

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
        <section
            id="services"
            className="w-full min-h-screen relative bg-primary"
        >
            <div className="fixed top-18 left-0 right-0 flex items-center justify-center z-0 pointer-events-none">
                <Image
                    src={Dalmation}
                    alt="Dalmatian dog in a bathtub with grooming accessories - professional dog grooming services"
                    className="w-auto h-auto max-w-none"
                    style={{
                        objectFit: 'contain',
                        maxWidth: '100%',
                        maxHeight: '100vh',
                        width: 'auto',
                        height: 'auto'
                    }}
                    priority
                />
            </div>

            <div className="relative z-10 pt-[50vh]">
                <header className="w-full max-w-3xl mx-auto p-8 bg-primary/50 backdrop-blur-sm shadow-md rounded-xl text-center">
                    <h1 className="text-[clamp(1.75rem,2rem+0.5vw,5rem)] text-shadow-lg text-center font-semibold text-tertiary">
                        {servicesPageContent.headings.main}
                    </h1>
                </header>

                <div className="container w-full max-w-4xl mx-auto mt-12 px-4 py-8 bg-secondary/65 rounded-xl">
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
                        Our Professional Dog Grooming Services
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

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-black">
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

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-black">
                        {servicesPageContent.headings.pricing}
                    </h2>
                    <div className="bg-primary/80 backdrop-blur-xs p-6 rounded-lg shadow text-center">
                        <p className="mb-4">
                            Prices vary based on breed, size, and specific needs. Contact us for a personalized quote.
                        </p>
                        <a 
                            href="/contact" 
                            className="inline-block bg-tertiary text-white px-6 py-3 rounded-lg font-semibold hover:bg-tertiary/90 transition-colors"
                        >
                            {ctaButtons.getQuote}
                        </a>
                    </div>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-black">
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
                        <h3 className="text-2xl font-bold text-black mb-4">
                            Ready to Give Your Dog the Best Grooming Experience?
                        </h3>
                        <p className="mb-6">{paragraphs.ctaParagraph}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/contact" 
                                className="bg-tertiary text-white px-6 py-3 rounded-lg font-semibold hover:bg-tertiary/90 transition-colors"
                            >
                                {ctaButtons.schedule}
                            </a>
                            <a 
                                href="/contact" 
                                className="bg-white/20 text-tertiary border border-tertiary px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                            >
                                {ctaButtons.contactUs}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}