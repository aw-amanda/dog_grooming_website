"use client";
import Logo from "@/public/BDG_Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
                buttonRef.current?.focus();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && mobileMenuRef.current) {
            const focusableElements = mobileMenuRef.current.querySelectorAll(
                'a[href], button:not([disabled]), [tabindex="0"]'
            );
            if (focusableElements.length > 0) {
                (focusableElements[0] as HTMLElement).focus();
            }
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

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
                            className="block text-md md:text-lg text-tertiary font-semibold hover:opacity-80 transition-opacity duration-200 focus:outline-none"
                            aria-label="Best Dog Groomer Home"
                        >
                            <Image
                                src={Logo}
                                alt="Best Dog Grooming Services logo - link to home"
                                className="w-8 h-8 md:w-12 md:h-12 rounded-full object-contain overflow-hidden"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                                width={48}
                                height={48}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-6 lg:gap-8">
                        {NavItems.map((item, index) => (
                            <li key={index} className="group">
                                <Link
                                    href={item.href}
                                    className="relative inline-block text-tertiary font-medium focus:outline-none rounded px-2 py-1 transition-color duration-200"
                                    aria-current={item.href === '/' ? 'page' : undefined}
                                >
                                    {item.label}
                                    <span className="absolute left-0 bottom-0 bg-yellow-50 h-0.5 w-full transition-all duration-500 ease-in-out scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 origin-center"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        ref={buttonRef}
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-50"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-haspopup="true"
                    >
                        <span className={`block w-6 h-0.5 bg-tertiary rounded-full transition-all duration-300 ease-out ${isOpen ? "rotate-45 translate-y-2" : ""}`} 
                              aria-hidden="true" />
                        <span className={`block w-6 h-0.5 bg-tertiary rounded-full transition-all duration-300 ease-out ${isOpen ? "opacity-0" : ""}`} 
                              aria-hidden="true" />
                        <span className={`block w-6 h-0.5 bg-tertiary rounded-full transition-all duration-300 ease-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} 
                              aria-hidden="true" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    ref={mobileMenuRef}
                    id="mobile-menu"
                    className="fixed inset-y-0 right-0 top-18 w-full h-[calc(100vh-4.5rem)] z-40 bg-primary/50 backdrop-blur-xl"
                    role="menu"
                    aria-label="Mobile navigation"
                    aria-hidden={!isOpen}
                >
                    <ul className="flex flex-col p-6 gap-y-2 items-start justify-start max-w-screen">
                        {NavItems.map((item, index) => (
                            <li key={index} className="w-full">
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full py-4 text-tertiary font-medium text-lg px-4 hover:bg-secondary/20 focus:bg-secondary/20 focus:outline-none transition-all"
                                    role="menuitem"
                                    aria-current={item.href === '/' ? 'page' : undefined}
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