import Dalmation from "@/public/best-dog-grooming-dalmation-fan.png";
import { Metadata } from "next";
import { aboutPageContent, seoMetadata } from "@/app/data";
import Image from "next/image";

export const metadata: Metadata = {
    title: seoMetadata.about.title,
    description: seoMetadata.about.description,
    keywords: seoMetadata.about.keywords,
    openGraph: {
        title: seoMetadata.about.openGraph.title,
        description: seoMetadata.about.openGraph.description,
        type: "website",
        locale: "en_US",
        siteName: "Best Dog Grooming Services",
    },
    twitter: {
        card: "summary_large_image",
        title: seoMetadata.about.title,
        description: seoMetadata.about.description,
    },
    alternates: {
        canonical: "/about",
    },
};

export default function About() {
    return(
        <section
            id="about"
            className="w-full min-h-screen flex flex-col px-6 py-4 md:px-12 md:py-14 items-center justify-center
                       bg-linear-to-b from-yellow-50 via-primary to-yellow-50"
        >
            <header className="w-full mx-auto my-2 md:my-4 p-2 text-start">
                <h1 className="text-[clamp(1.75rem,2rem+0.5vw,5rem)] font-semibold text-tertiary">{aboutPageContent.headings.main}</h1>
                <p className="text-md font-light mt-4">{aboutPageContent.introParagraph}</p>
            </header>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mt-8 mb-4">{aboutPageContent.headings.whyChooseUs}</h2>
                <ul className="list-disc pl-6 space-y-2">
                    {aboutPageContent.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">{aboutPageContent.headings.services}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {aboutPageContent.servicesList.map((service, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg">{service.name}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>

                <Image
                    src={Dalmation}
                    alt="image of dalmation by a fan"
                    className="object-contain overflow-hidden w-full"
                />

                <h2 className="text-2xl font-bold mt-8 mb-4">{aboutPageContent.headings.testimonials}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {aboutPageContent.testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-yellow-50 p-4 rounded-lg border border-primary">
                            <p className="italic">"{testimonial.text}"</p>
                            <p className="font-semibold mt-2">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}