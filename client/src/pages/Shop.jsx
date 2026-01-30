import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('/api/products');
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts([
                    {
                        _id: '1',
                        name: 'Royal Cardamom Bloom',
                        description: 'A delicate infusion of premium cardamom and CTC tea, fit for royalty. This blend captures the essence of Indian traditions with every sip.',
                        price: 48
                    },
                    {
                        _id: '2',
                        name: 'Masala Heritage Fusion',
                        description: 'A secret blend of seven spices passed down through generations. Experience the authentic taste of royal Indian masala chai.',
                        price: 48
                    },
                    {
                        _id: '3',
                        name: 'Zesty Ginger Elixir',
                        description: 'A sharp, refreshing kick of sun-dried ginger and hand-picked tea leaves. Perfect for those seeking warmth and vitality.',
                        price: 48
                    }
                ]);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="section-container">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-heading font-bold text-deep-brown mb-4">
                    Shop Our Collection
                </h1>
                <p className="text-heritage-brown text-lg max-w-2xl mx-auto">
                    Browse our premium selection of royal chai blends. Each product is crafted
                    with care to deliver an authentic Indian tea experience.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Shop;
