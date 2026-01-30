const ProductCard = ({ product }) => {
    return (
        <div className="product-card group">
            {/* Product Image */}
            <div className="relative h-64 bg-gradient-to-br from-cream-dark to-cream overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 border-4 border-royal-gold rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-royal-gold" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                        </div>
                        <span className="text-royal-gold/50 text-sm italic">Premium Blend</span>
                    </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-royal-gold/0 group-hover:bg-royal-gold/10 transition-all duration-300"></div>
            </div>

            {/* Product Info */}
            <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-deep-brown mb-3 group-hover:text-royal-gold transition-colors">
                    {product.name}
                </h3>

                <p className="text-heritage-brown text-sm mb-4 leading-relaxed line-clamp-3">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-heading font-bold text-royal-gold">
                        ${product.price}
                    </span>
                    <span className="text-xs text-heritage-brown uppercase tracking-wide">
                        Premium Quality
                    </span>
                </div>

                <button className="btn-royal w-full">
                    PRE-ORDER NOW
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
