const About = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-deep-brown to-heritage-brown py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-heading font-bold text-royal-gold mb-6">
                        Our Story
                    </h1>
                    <p className="text-cream text-xl">
                        Brew the Royal Tradition
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <section className="section-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-heading font-bold text-deep-brown mb-4">
                            A Legacy of Excellence
                        </h2>
                        <p className="text-heritage-brown text-lg leading-relaxed mb-4">
                            Chai Culture is more than a brand – it's a celebration of India's rich tea heritage.
                            Inspired by royal traditions, we bring you premium chai blends that honor centuries
                            of craftsmanship while delivering a modern, luxurious experience.
                        </p>
                        <p className="text-heritage-brown text-lg leading-relaxed">
                            Each blend in our collection is carefully curated using the finest ingredients,
                            from hand-picked tea leaves to rare spices sourced from across India. We believe
                            that every cup should tell a story of warmth, authenticity, and royal elegance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center p-6 bg-cream-dark rounded-lg">
                            <div className="w-16 h-16 mx-auto mb-4 bg-royal-gold rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl font-bold text-deep-brown mb-2">Premium Quality</h3>
                            <p className="text-heritage-brown text-sm">Only the finest ingredients make it into our blends</p>
                        </div>

                        <div className="text-center p-6 bg-cream-dark rounded-lg">
                            <div className="w-16 h-16 mx-auto mb-4 bg-royal-gold rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl font-bold text-deep-brown mb-2">Crafted with Care</h3>
                            <p className="text-heritage-brown text-sm">Each blend is meticulously created by our tea masters</p>
                        </div>

                        <div className="text-center p-6 bg-cream-dark rounded-lg">
                            <div className="w-16 h-16 mx-auto mb-4 bg-royal-gold rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl font-bold text-deep-brown mb-2">Royal Heritage</h3>
                            <p className="text-heritage-brown text-sm">Inspired by centuries of Indian tea tradition</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-royal-gold/10 to-royal-gold/5 p-8 rounded-lg border-l-4 border-royal-gold">
                        <h3 className="text-2xl font-heading font-bold text-deep-brown mb-4">
                            Our Mission
                        </h3>
                        <p className="text-heritage-brown text-lg leading-relaxed">
                            To share the warmth and authenticity of Indian chai culture with the world.
                            We're committed to delivering not just a beverage, but an experience – one that
                            connects you to the royal heritage and timeless traditions of India with every cup.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
