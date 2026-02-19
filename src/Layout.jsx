import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
    Brain,
    Server,
    Code2,
    Cpu,
    BarChart3,
    Users,
    Rocket,
    ArrowRight,
    Menu,
    X,
    Github,
    Mail,
    Globe,
    Sun,
    Moon
} from 'lucide-react';

const Logo = () => (
    <Link to="/" className="flex items-center gap-3">
        {/* Using the transparent logo provided */}
        <img src="/logo-transparent.png" alt="IESRG Logo" className="h-10 w-auto" />
        <div className="font-heading font-bold text-xl tracking-tight text-gray-900 dark:text-white hidden sm:block">
            IESRG
        </div>
    </Link>
);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Research', to: '/#research' },
        { name: 'About', to: '/#about' },
        { name: 'Audience', to: '/#audience' },
    ];

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    // Helper for smooth scroll if on home page
    const handleNavClick = (e, to) => {
        if (location.pathname === '/' && to.startsWith('/#')) {
            e.preventDefault();
            const id = to.substring(2);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container flex items-center justify-between">
                <Logo />

                {/* Desktop Nav - Hidden on mobile AND tablet now */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            onClick={(e) => handleNavClick(e, link.to)}
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 transition-colors"
                        aria-label="Toggle theme"
                    >
                        <Sun className="h-5 w-5 hidden dark:block" />
                        <Moon className="h-5 w-5 block dark:hidden" />
                    </button>
                    <Link
                        to="/apply"
                        className="px-5 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                    >
                        Join Us
                    </Link>
                </div>

                {/* Mobile/Tablet Toggle - Visible on mobile AND tablet */}
                <div className="flex items-center gap-4 lg:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 transition-colors"
                    >
                        <Sun className="h-5 w-5 hidden dark:block" />
                        <Moon className="h-5 w-5 block dark:hidden" />
                    </button>
                    <button
                        className="text-gray-900 dark:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/95 dark:bg-black/95 border-b border-gray-200 dark:border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    onClick={(e) => handleNavClick(e, link.to)}
                                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-lg font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/apply"
                                onClick={() => setMobileMenuOpen(false)}
                                className="inline-block text-center w-full px-5 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-semibold mt-2"
                            >
                                Join Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export const Footer = () => (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-white/10 py-12 transition-colors duration-300">
        <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                <Logo />
                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"><Globe size={20} /></a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"><Mail size={20} /></a>
                </div>
            </div>
            <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500 dark:text-gray-500">
                <p>&copy; {new Date().getFullYear()} IESRG. All rights reserved.</p>
                <p>Department of Software Engineering</p>
            </div>
        </div>
    </footer>
);

export default Navbar;
