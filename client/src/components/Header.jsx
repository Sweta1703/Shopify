import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-deep-brown border-b-4 border-royal-gold sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Logo Section */}
                <div className="flex justify-center py-4 border-b border-royal-gold/30">
                    <Link to="/" className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-royal-gold tracking-wide">
                            CHAI CULTURE
                        </h1>
                        <p className="text-cream text-xs md:text-sm tracking-[0.3em] mt-1 font-light">
                            BREW THE ROYAL TRADITION
                        </p>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="py-4">
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex justify-center items-center space-x-12">
                        <li>
                            <Link
                                to="/"
                                className="text-cream hover:text-royal-gold transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/shop"
                                className="text-cream hover:text-royal-gold transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
                            >
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="text-cream hover:text-royal-gold transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="text-cream hover:text-royal-gold transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex justify-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-cream hover:text-royal-gold transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 pb-4">
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-cream hover:text-royal-gold transition-colors duration-300 font-semibold text-sm uppercase"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shop"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-cream hover:text-royal-gold transition-colors duration-300 font-semibold text-sm uppercase"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-cream hover:text-royal-gold transition-colors duration-300 font-semibold text-sm uppercase"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-cream hover:text-royal-gold transition-colors duration-300 font-semibold text-sm uppercase"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
