"use client";

import Link from "next/link";
import { useState, useCallback } from "react";

interface NavProps {
    label: string;
    href: string;
}

const NavItems: NavProps[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Service Area", href: "/service-area" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const handleLinkClick = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <>
            {/* Overlay */}
            <div 
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-40
                          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={handleLinkClick}
                aria-hidden="true"
            />
            
            <nav 
                className="sticky top-0 w-full h-18 md:h-32 bg-primary/50 backdrop-blur-2xl shadow-xl z-50"
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
                                BDG
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
                            {NavItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="text-tertiary hover:opacity-80 transition-opacity 
                                                    duration-200 font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 
                                      focus:outline-none focus:ring-2 focus:ring-tertiary 
                                      focus:ring-offset-2 focus:ring-offset-primary/50 rounded-lg 
                                      transition-all duration-200 z-50"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className={`block w-6 h-0.5 bg-tertiary rounded-full transition-all 
                                              duration-300 ease-out
                                              ${isOpen ? "rotate-45 translate-y-2" : ""}
                                            `}
                            />
                            <span className={`block w-6 h-0.5 bg-tertiary rounded-full transition-all 
                                             duration-300 ease-out
                                             ${isOpen ? "opacity-0" : ""}
                                            `}
                            />
                            <span className={`block w-6 h-0.5 bg-tertiary rounded-full transition-all 
                                             duration-300 ease-out
                                             ${isOpen ? "-rotate-45 -translate-y-2" : ""}
                                            `}
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={`fixed md:hidden left-0 right-0 top-18 h-[calc(100vh-4.5rem)] 
                              bg-primary/95 backdrop-blur-xl shadow-2xl transition-transform 
                              duration-300 ease-out z-40 overflow-y-auto
                              ${isOpen ? "translate-x-0" : "translate-x-full"}
                              `}
                    aria-hidden={!isOpen}
                    role="menu"
                >
                    <ul className="flex flex-col p-6 gap-y-2 items-start justify-start max-w-screen">
                        {NavItems.map((item, index) => (
                            <li key={index} className="w-full">
                                <Link
                                    href={item.href}
                                    onClick={handleLinkClick}
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
            </nav>
        </>
    );
}