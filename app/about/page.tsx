import { Metadata } from "next";
import { aboutPageContent, seoMetadata } from "@/app/data";
import Image from "next/image";
import Soap from "@/public/best-dog-groomer-soap-graphic.png";
import Dog from "@/public/best-dog-groomer-dog-3.png";

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
            className="w-full min-h-screen flex flex-col pt-18 px-4 items-center justify-center
                       bg-linear-to-b from-yellow-50 via-primary to-yellow-50"
        >
            <div className="hidden md:block fixed left-0 top-18 p-2 md:p-4 z-0 pointer-events-none">
                <Image
                    src={Soap}
                    alt="soap graphic"
                    className="w-full max-w-xs h-auto object-contain overflow-hidden"
                />
            </div>
            <div className="hidden md:block fixed right-0 bottom-2 p-2 md:p-4 z-0 pointer-events-none">
                <Image
                    src={Dog}
                    alt="Dog graphic"
                    className="w-full max-w-xs h-auto object-contain overflow-hidden"
                />
            </div>

            <div className="z-10">
                <header className="w-full md:w-2/3 max-w-6xl p-2 md:p-12 md:ml-75">
                    <h1 className="text-[clamp(1.75rem,2rem+0.5vw,5rem)] font-semibold text-tertiary">{aboutPageContent.headings.main}</h1>
                    <p className="text-md font-light mt-4 text-start">{aboutPageContent.introParagraph}</p>
                </header>
                <div className="container w-full md:w-2/3 max-w-5xl mt-12 px-4 py-8 bg-yellow-50/25 backdrop-blur-md rounded-xl">
                    <h2 className="text-2xl text-secondary text-shadow-2xl font-bold mt-8 mb-4">{aboutPageContent.headings.whyChooseUs}</h2>
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
            </div>
        </section>
    )
}