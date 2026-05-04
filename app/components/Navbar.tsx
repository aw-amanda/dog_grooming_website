"use client";
import Logo from "@/public/BDG_Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


interface NavProps {
    label: string;
    href: string;
};

const NavItems: NavProps[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Service Area", href: "/service-area" },
    { label: "Contact", href: "/contact" },
];

const mobileMenuButton = "block w-6 h-0.5 bg-tertiary rounded-full transition-all duration-300 ease-out";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="fixed top-0 w-full h-18 px-2 bg-primary/40 backdrop-blur-2xl shadow-xl z-50"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="h-full px-4 md:px-8">
                <div className="h-full flex items-center justify-between">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link
                            href="/"
                            className="block text-md md:text-lg text-tertiary font-semibold hover:opacity-80 
                                        transition-opacity duration-200"
                            aria-label="Best Dog Groomer Home"
                        >
                            <Image
                                src={Logo}
                                alt="Logo link to home"
                                className="w-8 h-8 md:w-12 md:h-12 rounded-full object-contain overflow-hidden"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-6 lg:gap-8">
                        {NavItems.map((item, index) => (
                            <li key={index} className="group">
                                <Link
                                    href={item.href}
                                    className="relative inline-block text-tertiary font-medium focus:outline-none
                                             focus:text-yellow-50 transition-color duration-200"
                                >
                                    {item.label}
                                    <span className="absolute left-0 bottom-0 bg-yellow-50 h-0.5 w-full transition-all 
                                                     duration-500 ease-in-out scale-x-0 group-hover:scale-x-100 origin-center"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 
                                    focus:outline-none focus:ring-2 focus:ring-tertiary 
                                    focus:ring-offset-2 focus:ring-offset-primary/50 rounded-lg 
                                    transition-all duration-300 z-50"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        <span className={`${mobileMenuButton} ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`${mobileMenuButton} ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`${mobileMenuButton} ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="fixed inset-y-0 right-0 top-18 w-full h-[calc(100vh-4.5rem)] z-40
                                bg-primary/50 backdrop-blur-xl"
                    aria-hidden={!isOpen}
                    role="menu"
                >
                    <ul className="flex flex-col p-6 gap-y-2 items-start justify-start max-w-screen">
                        {NavItems.map((item, index) => (
                            <li key={index} className="w-full" onClick={() => setIsOpen(false)}>
                                <Link
                                    href={item.href}
                                    className="block w-full py-4 text-tertiary font-medium text-lg px-4 
                                                hover:bg-secondary/20 focus:bg-secondary/20 focus:outline-none 
                                                focus:ring-2 focus:ring-tertiary rounded-lg transition-all"
                                    role="menuitem"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}