const HeroBanner = () => {
    return (
        <div className="relative bg-gradient-to-br from-deep-brown via-heritage-brown to-deep-brown min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-4 border-royal-gold rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-royal-gold transform rotate-45"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-royal-gold"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 animate-fadeInUp">
                <div className="mb-8">
                    {/* Coming Soon Badge */}
                    <div className="inline-block mb-8">
                        <span className="border-4 border-royal-gold text-royal-gold px-8 py-3 text-sm md:text-base font-bold tracking-[0.3em] uppercase animate-pulse">
                            COMING SOON
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-royal-gold mb-6 leading-tight">
                        Brew the Royal Tradition
                    </h1>

                    <p className="text-cream text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
                        Chai Culture is arriving soon. Experience the warmth of Indian heritage in every sip.
                    </p>

                    <p className="text-cream-dark text-base md:text-lg italic">
                        A premium chai brand inspired by royal heritage, warmth, and authenticity.
                    </p>
                </div>

                {/* Decorative Divider */}
                <div className="flex items-center justify-center space-x-4 my-8">
                    <div className="w-16 h-0.5 bg-royal-gold"></div>
                    <div className="w-3 h-3 bg-royal-gold transform rotate-45"></div>
                    <div className="w-16 h-0.5 bg-royal-gold"></div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                    <button className="btn-royal text-lg px-10 py-4">
                        BE THE FIRST TO KNOW
                    </button>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1200 100" className="w-full h-16 fill-cream">
                    <path d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default HeroBanner;
