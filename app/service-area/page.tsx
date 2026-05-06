import Image from "next/image"
import ServiceAreaImage from "@/public/beagle-hound.png";
import { Metadata } from "next";
import { seoMetadata, ctaButtons, paragraphs, serviceAreaContent } from "@/app/data";

export const metadata: Metadata = {
    title: seoMetadata.serviceArea.title,
    description: seoMetadata.serviceArea.description,
    keywords: seoMetadata.serviceArea.keywords,
    openGraph: {
        title: seoMetadata.serviceArea.title,
        description: seoMetadata.serviceArea.description,
        type: "website",
        locale: "en_US",
        siteName: "Best Dog Grooming Services",
    },
    twitter: {
        card: "summary_large_image",
        title: seoMetadata.serviceArea.title,
        description: seoMetadata.serviceArea.description,
    },
    alternates: {
        canonical: "/service-area",
    },
};

export default function ServiceArea() {
    return(
        <div className="flex min-h-screen flex-col bg-linear-to-b from-yellow-50 via-primary to-yellow-50 pt-18">
            <main className="flex-1">
                <section className="container mx-auto px-4 py-12">
                    <header className="w-full p-2 flex flex-col items-center justify-center text-center gap-y-5">
                        <h1 className="text-tertiary text-3xl md:text-5xl text-shadow-lg font-bold">
                            {serviceAreaContent.headings.main}
                        </h1>
                        <Image 
                            src={ServiceAreaImage}
                            alt="professional dog grooming services available in your area - best dog groomer"
                            className="object-contain overflow-hidden w-50 max-w-sm m-1"
                        />
                        <p className="text-secondary text-lg md:text-2xl text-shadow-md my-2 md:my-4">
                            {serviceAreaContent.subheading}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="text-tertiary px-2 py-3 md:px-3 md:py-4 bg-primary border-none rounded-xl
                                              shadow-sm hover:shadow-lg transition-shadow active:ring-1 ease-in-out duration-200">
                                {ctaButtons.schedule}
                            </button>
                            <a 
                                href="/contact" 
                                className="inline-block text-tertiary px-2 py-3 md:px-3 md:py-4 bg-white/20 border border-tertiary rounded-xl
                                          shadow-sm hover:shadow-lg transition-shadow active:ring-1 ease-in-out duration-200 text-center"
                            >
                                {ctaButtons.contactUs}
                            </a>
                        </div>
                    </header>
                </section>

                <div className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12">
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-tertiary">
                        {serviceAreaContent.primaryArea.heading}
                    </h2>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                        {paragraphs.serviceAreaIntro}
                    </p>
                    <div className="bg-yellow-50/25 backdrop-blur-xs p-6 rounded-lg shadow mb-8">
                        <div className="grid md:grid-cols-2 gap-3">
                            {serviceAreaContent.primaryArea.areas.map((area, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-tertiary font-bold text-lg">✓</span>
                                    <span className="text-gray-700">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-tertiary">
                        {serviceAreaContent.surroundingCommunities.heading}
                    </h2>
                    <div className="bg-yellow-50/25 backdrop-blur-xs p-6 rounded-lg shadow mb-8">
                        <div className="grid md:grid-cols-2 gap-3">
                            {serviceAreaContent.surroundingCommunities.areas.map((area, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-tertiary font-bold text-lg">✓</span>
                                    <span className="text-gray-700">{area}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-4 italic">
                            {serviceAreaContent.surroundingCommunities.note}
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-tertiary">
                        {serviceAreaContent.mobileGrooming.heading}
                    </h2>
                    <p className="mb-4 text-gray-700">{serviceAreaContent.mobileGrooming.description}</p>
                    <div className="bg-yellow-50/25 backdrop-blur-xs p-6 rounded-lg shadow mb-8">
                        <h3 className="font-semibold text-lg text-tertiary mb-3">Mobile Grooming Benefits:</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                            {serviceAreaContent.mobileGrooming.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-tertiary font-bold">✦</span>
                                    <span className="text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-tertiary">
                        {serviceAreaContent.whatToExpect.heading}
                    </h2>
                    <div className="bg-yellow-50/25 backdrop-blur-xs p-6 rounded-lg shadow mb-8">
                        <div className="grid gap-3">
                            {serviceAreaContent.whatToExpect.steps.map((step, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <span className="bg-tertiary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </span>
                                    <span className="text-gray-700">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-tertiary">
                        Frequently Asked Questions About Our Service Area
                    </h2>
                    <div className="space-y-4">
                        {serviceAreaContent.faqs.map((faq, index) => (
                            <div key={index} className="bg-yellow-50/25 backdrop-blur-xs p-5 rounded-lg shadow">
                                <h3 className="font-semibold text-lg text-tertiary">{faq.question}</h3>
                                <p className="mt-2 text-gray-700">{faq.answer}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center bg-primary/50 backdrop-blur-xs p-8 rounded-lg shadow">
                        <h3 className="text-2xl font-bold text-tertiary mb-4">
                            Ready to Give Your Dog the Best Grooming Experience?
                        </h3>
                        <p className="mb-6 text-gray-700">{paragraphs.ctaParagraph}</p>
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
            </main>
        </div>
    )
}