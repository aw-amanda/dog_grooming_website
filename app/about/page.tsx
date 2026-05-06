import { Metadata } from "next";
import { aboutPageContent, seoMetadata } from "@/app/data";
import Image from "next/image";
import AboutListImage from "@/public/pug.png";

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
       <div className="flex min-h-screen flex-col bg-linear-to-b from-yellow-50 via-primary to-yellow-50 pt-18">
            <main className="flex-1">
                <section className="container mx-auto px-4 py-12">
                    <header className="w-full p-2 flex flex-col items-center justify-center text-center gap-y-5">
                        <h1 className="text-tertiary text-3xl md:text-5xl text-shadow-lg font-bold">{aboutPageContent.headings.main}</h1>
                        <p className="text-gray-700 text-lg md:text-2xl my-2 md:my-4">{aboutPageContent.introParagraph}</p>
                    </header>

                    <div className="container w-full max-w-4xl mx-auto mt-6 px-4 py-8 mb-12">
                        <h2 className="text-2xl text-tertiary text-shadow-2xl font-bold mt-8 mb-4">{aboutPageContent.headings.whyChooseUs}</h2>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <ul className="list-disc pl-6 space-y-2">
                                {aboutPageContent.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                            <Image
                                src={AboutListImage}
                                alt="image of a pug"
                                className="object-contain overflow-hidden w-60 max-w-sm m-1"
                            />
                        </div>
                        

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
                </section>
            </main>
        </div>
    )
}