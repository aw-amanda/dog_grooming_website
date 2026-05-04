import Image from "next/image";
import Tub from "@/public/best-dog-groomer-tub.png";
import { Metadata } from "next";
import { seoMetadata, ctaButtons, contactPageContent } from "@/app/data";

export const metadata: Metadata = {
    title: seoMetadata.contact.title,
    description: seoMetadata.contact.description,
    keywords: seoMetadata.contact.keywords,
    openGraph: {
        title: seoMetadata.contact.title,
        description: seoMetadata.contact.description,
        type: "website",
        locale: "en_US",
        siteName: "Best Dog Grooming Services",
    },
    twitter: {
        card: "summary_large_image",
        title: seoMetadata.contact.title,
        description: seoMetadata.contact.description,
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function Contact() {
    return(
        <section 
            id="contact"
            className="relative w-full min-h-screen bg-tan overflow-hidden pt-18"
        >
            <div className="fixed inset-0 w-full flex items-center justify-center z-0 pointer-events-none">
                <Image
                    src={Tub}
                    alt="Clean bathtub with professional dog grooming accessories - contact the best dog groomer in your area"
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 w-full px-4 py-12">
                <div className="container mx-auto max-w-4xl">
                    
                    {/* Header Section with H1 and Description */}
                    <header className="w-full max-w-3xl mx-auto p-8 bg-black/10 backdrop-blur-sm shadow-md rounded-xl text-center mb-12">
                        <h1 className="text-tertiary text-3xl md:text-5xl text-shadow-lg font-bold">
                            {contactPageContent.headings.main}
                        </h1>
                        <div className="w-full h-0.5 my-6 bg-linear-to-r from-transparent via-tertiary to-transparent"/>
                        <p className="text-yellow-950 text-lg md:text-xl">
                            {contactPageContent.description}
                        </p>
                    </header>

                    {/* Contact Form */}
                    <div className="bg-black/10 backdrop-blur-sm rounded-xl shadow-md p-6 md:p-8 border border-tertiary/30">
                        <h2 className="text-2xl font-bold text-tertiary text-center mb-6">
                            Send Us a Message
                        </h2>
                        
                        <form className="w-full flex flex-col gap-5">
                            {/* Name Field */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-tertiary font-semibold text-lg">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-gray-800 
                                             border border-tertiary/30 focus:border-tertiary focus:outline-none 
                                             focus:ring-2 focus:ring-tertiary/50 transition-all duration-200"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-tertiary font-semibold text-lg">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-gray-800 
                                             border border-tertiary/30 focus:border-tertiary focus:outline-none 
                                             focus:ring-2 focus:ring-tertiary/50 transition-all duration-200"
                                    required
                                />
                            </div>

                            {/* Phone Field */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="text-tertiary font-semibold text-lg">
                                    Phone Number
                                </label>
                                <input 
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="(555) 123-4567"
                                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-gray-800 
                                             border border-tertiary/30 focus:border-tertiary focus:outline-none 
                                             focus:ring-2 focus:ring-tertiary/50 transition-all duration-200"
                                />
                            </div>

                            {/* Service Selection */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="service" className="text-tertiary font-semibold text-lg">
                                    Service Interested In
                                </label>
                                <select 
                                    id="service"
                                    name="service"
                                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-gray-800 
                                             border border-tertiary/30 focus:border-tertiary focus:outline-none 
                                             focus:ring-2 focus:ring-tertiary/50 transition-all duration-200"
                                >
                                    <option value="">Select a service...</option>
                                    <option value="luxury-bath">Luxury Bath & Brush</option>
                                    <option value="full-groom">Full Groom Package</option>
                                    <option value="express-groom">Express Groom</option>
                                    <option value="pamper-package">Pamper Package</option>
                                    <option value="mobile-grooming">Mobile Grooming</option>
                                    <option value="other">Other / Not Sure</option>
                                </select>
                            </div>

                            {/* Message Field */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-tertiary font-semibold text-lg">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell us about your dog and what services you're interested in..."
                                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-gray-800 
                                             border border-tertiary/30 focus:border-tertiary focus:outline-none 
                                             focus:ring-2 focus:ring-tertiary/50 transition-all duration-200 resize-vertical"
                                    required
                                ></textarea>
                            </div>

                            {/* Preferred Contact Method */}
                            <div className="flex flex-col gap-2">
                                <label className="text-tertiary font-semibold text-lg">
                                    Preferred Contact Method
                                </label>
                                <div className="flex gap-6">
                                    <label className="flex items-center gap-2 text-gray-700">
                                        <input 
                                            type="radio" 
                                            name="contactMethod" 
                                            value="email"
                                            defaultChecked
                                            className="w-4 h-4 text-tertiary focus:ring-tertiary"
                                        />
                                        Email
                                    </label>
                                    <label className="flex items-center gap-2 text-gray-700">
                                        <input 
                                            type="radio" 
                                            name="contactMethod" 
                                            value="phone"
                                            className="w-4 h-4 text-tertiary focus:ring-tertiary"
                                        />
                                        Phone
                                    </label>
                                    <label className="flex items-center gap-2 text-gray-700">
                                        <input 
                                            type="radio" 
                                            name="contactMethod" 
                                            value="text"
                                            className="w-4 h-4 text-tertiary focus:ring-tertiary"
                                        />
                                        Text Message
                                    </label>
                                </div>
                            </div>

                            {/* Best Time to Contact */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="bestTime" className="text-tertiary font-semibold text-lg">
                                    Best Time to Contact You
                                </label>
                                <select 
                                    id="bestTime"
                                    name="bestTime"
                                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-gray-800 
                                             border border-tertiary/30 focus:border-tertiary focus:outline-none 
                                             focus:ring-2 focus:ring-tertiary/50 transition-all duration-200"
                                >
                                    <option value="">Select a time...</option>
                                    <option value="morning">Morning (9am - 12pm)</option>
                                    <option value="afternoon">Afternoon (12pm - 3pm)</option>
                                    <option value="evening">Evening (3pm - 6pm)</option>
                                    <option value="anytime">Anytime</option>
                                </select>
                            </div>

                            {/* Submit Button */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                                <button 
                                    type="submit"
                                    className="bg-tertiary text-white px-8 py-3 rounded-lg font-semibold 
                                             hover:bg-tertiary/90 transition-all duration-200 
                                             shadow-sm hover:shadow-lg active:ring-1"
                                >
                                    {ctaButtons.sendMessage || "Send Message"}
                                </button>
                                <button 
                                    type="reset"
                                    className="bg-white/20 text-tertiary border border-tertiary px-8 py-3 rounded-lg font-semibold 
                                             hover:bg-white/30 transition-all duration-200"
                                >
                                    Clear Form
                                </button>
                            </div>

                            {/* Form Note */}
                            <p className="text-sm text-gray-500 text-center mt-4">
                                <span className="text-red-500">*</span> Required fields. We'll get back to you within 24 hours.
                            </p>
                        </form>
                    </div>

                    {/* Alternative Contact Methods */}
                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <div className="bg-primary/50 backdrop-blur-sm rounded-xl shadow-md p-6 text-center border border-tertiary/30">
                            <h3 className="text-xl font-bold text-tertiary mb-3">Call or Text Us</h3>
                            <p className="text-gray-700 mb-2">Prefer to speak with someone directly?</p>
                            <p className="text-2xl font-semibold text-tertiary">(555) 123-GROOM</p>
                            <p className="text-sm text-gray-500 mt-2">Mon-Sat: 9am - 6pm</p>
                        </div>
                        
                        <div className="bg-primary/50 backdrop-blur-sm rounded-xl shadow-md p-6 text-center border border-tertiary/30">
                            <h3 className="text-xl font-bold text-tertiary mb-3">Visit Our Location</h3>
                            <p className="text-gray-700 mb-2">123 Main Street</p>
                            <p className="text-gray-700">Your City, Your State 12345</p>
                            <p className="text-sm text-gray-500 mt-2">By appointment only</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}