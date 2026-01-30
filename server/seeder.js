import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import connectDB from './config/db.js';

dotenv.config();

const products = [
    {
        name: 'Royal Cardamom Bloom',
        description: 'A delicate infusion of premium cardamom and CTC tea, fit for royalty. This blend captures the essence of Indian traditions with every sip.',
        price: 48,
        image: '/cardamom.jpg',
        category: 'Premium Chai Blend',
        inStock: false,
        isPreOrder: true,
    },
    {
        name: 'Masala Heritage Fusion',
        description: 'A secret blend of seven spices passed down through generations. Experience the authentic taste of royal Indian masala chai.',
        price: 48,
        image: '/masala.jpg',
        category: 'Premium Chai Blend',
        inStock: false,
        isPreOrder: true,
    },
    {
        name: 'Zesty Ginger Elixir',
        description: 'A sharp, refreshing kick of sun-dried ginger and hand-picked tea leaves. Perfect for those seeking warmth and vitality.',
        price: 48,
        image: '/ginger.jpg',
        category: 'Premium Chai Blend',
        inStock: false,
        isPreOrder: true,
    },
];

const importData = async () => {
    try {
        await connectDB();

        // Clear existing products
        await Product.deleteMany();

        // Insert sample products
        await Product.insertMany(products);

        console.log('✅ Data Imported Successfully!');
        process.exit();
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await connectDB();

        await Product.deleteMany();

        console.log('✅ Data Destroyed Successfully!');
        process.exit();
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
