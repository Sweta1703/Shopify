import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from backend
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('/api/products');
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
                // Fallback to static products if backend is not available
                setProducts([
                    {
                        _id: '1',
                        name: 'Royal Cardamom Bloom',
                        description: 'A delicate infusion of premium cardamom and CTC tea, fit for royalty. This blend captures the essence of Indian traditions with every sip.',
                        price: 48,
                        image: '/cardamom.jpg'
                    },
                    {
                        _id: '2',
                        name: 'Masala Heritage Fusion',
                        description: 'A secret blend of seven spices passed down through generations. Experience the authentic taste of royal Indian masala chai.',
                        price: 48,
                        image: '/masala.jpg'
                    },
                    {
                        _id: '3',
                        name: 'Zesty Ginger Elixir',
                        description: 'A sharp, refreshing kick of sun-dried ginger and hand-picked tea leaves. Perfect for those seeking warmth and vitality.',
                        price: 48,
                        image: '/ginger.jpg'
                    }
                ]);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            {/* Hero Banner */}
            <HeroBanner />

            {/* Featured Products Section */}
            <section className="section-container">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-deep-brown mb-4">
                        Our Royal Blends
                    </h2>
                    <p className="text-heritage-brown text-lg max-w-2xl mx-auto">
                        Discover our exclusive collection of premium chai blends, crafted with the finest ingredients
                        and inspired by centuries of Indian tea tradition.
                    </p>

                    {/* Decorative Divider */}
                    <div className="flex items-center justify-center space-x-3 mt-6">
                        <div className="w-12 h-0.5 bg-royal-gold"></div>
                        <div className="w-2 h-2 bg-royal-gold transform rotate-45"></div>
                        <div className="w-12 h-0.5 bg-royal-gold"></div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </section>

            {/* Heritage Story Section */}
            <section className="bg-gradient-to-r from-deep-brown to-heritage-brown py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-heading font-bold text-royal-gold mb-6">
                        A Legacy of Warmth
                    </h2>
                    <p className="text-cream text-lg leading-relaxed mb-6">
                        Chai Culture brings you the authentic taste of royal Indian heritage. Each blend is carefully
                        crafted to honor centuries-old traditions while delivering a premium experience.
                    </p>
                    <p className="text-cream-dark italic">
                        "More than just tea – it's a celebration of culture, warmth, and authenticity."
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
