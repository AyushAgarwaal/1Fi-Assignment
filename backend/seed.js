import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './src/models/Product.js';

dotenv.config();

const products = [
  {
    name: 'iPhone 17 Pro',
    description:
      'EMI plans backed by mutual funds.',
    brand: 'Apple',
    category: 'Smartphones',
    badges: ['NEW'],
    mrp: 134900,
    price: 127400,
    image: 'https://i.ibb.co/jvr05WFs/iphone17orange.jpg',
    finishes: [
      { name: 'Orange', colorHex: '#f28a00' },
      { name: 'Silver', colorHex: '#d9d9d9' },
      { name: 'Blue', colorHex: '#2a6fb8' }
    ],
    variants: [
      {
        title: 'iPhone 17 Pro 256GB - Orange',
        sku: 'IP17P-256-OR',
        price: 127400,
        mrp: 134900,
        color: 'Orange',
        image: 'https://i.ibb.co/jvr05WFs/iphone17orange.jpg',
        images: [
          'https://i.ibb.co/S4Hr71HH/iphonesilver.jpg',
          'https://i.ibb.co/QvTnKDdq/iphoneblue.jpg',
          'https://i.ibb.co/jvr05WFs/iphone17orange.jpg'
        ],
        stock: 10
      },
      {
        title: 'iPhone 17 Pro 512GB - Silver',
        sku: 'IP17P-512-SV',
        price: 144900,
        mrp: 152900,
        color: 'Silver',
        image: 'https://i.ibb.co/S4Hr71HH/iphonesilver.jpg',
        images: [
          'https://i.ibb.co/jvr05WFs/iphone17orange.jpg',
          'https://i.ibb.co/Nny887jz/iphone177-blue.jpg'
        ],
        stock: 7
      },
      {
        title: 'iPhone 17 Pro 512GB - Blue',
        sku: 'IP17P-512-BL',
        price: 144900,
        mrp: 152900,
        color: 'Blue',
        image: 'https://i.ibb.co/QvTnKDdq/iphoneblue.jpg',
        images: [
          'https://i.ibb.co/jvr05WFs/iphone17orange.jpg',
          'https://i.ibb.co/S4Hr71HH/iphonesilver.jpg'
        ],
        stock: 5
      }
    ],
    emiPlans: [
      { tenureMonths: 3, interestRatePercent: 0, cashbackType: 'absolute', cashbackValue: 7500 },
      { tenureMonths: 6, interestRatePercent: 0, cashbackType: 'absolute', cashbackValue: 7500 },
      { tenureMonths: 12, interestRatePercent: 0, cashbackType: 'absolute', cashbackValue: 7500 },
      { tenureMonths: 24, interestRatePercent: 0, cashbackType: 'absolute', cashbackValue: 7500 },
      { tenureMonths: 36, interestRatePercent: 10.5, cashbackType: 'absolute', cashbackValue: 7500 },
      { tenureMonths: 48, interestRatePercent: 10.5, cashbackType: 'absolute', cashbackValue: 7500 }
    ]
  },

  {
    name: 'Samsung Galaxy S25 Ultra',
    description:
      'EMI plans backed by mutual funds.',
    brand: 'Samsung',
    category: 'Smartphones',
    badges: ['HOT DEAL'],
    mrp: 139999,
    price: 124999,
    image: 'https://i.ibb.co/7J2WhT8p/s25gray.jpg',
    finishes: [
      { name: 'Titanium Gray', colorHex: '#6e6e6e' },
      { name: 'Midnight Black', colorHex: '#000000' }
    ],
    variants: [
      {
        title: 'Galaxy S25 Ultra 256GB - Titanium Gray',
        sku: 'SGS25U-256-GR',
        price: 124999,
        mrp: 139999,
        color: 'Titanium Gray',
        image: 'https://i.ibb.co/7J2WhT8p/s25gray.jpg',
        images: [
          'https://i.ibb.co/7J2WhT8p/s25gray.jpg',
          'https://i.ibb.co/6R8Xf2Gq/s25black.jpg'
        ],
        stock: 12
      },
      {
        title: 'Galaxy S25 Ultra 512GB - Midnight Black',
        sku: 'SGS25U-512-BK',
        price: 139999,
        mrp: 149999,
        color: 'Midnight Black',
        image: 'https://i.ibb.co/6R8Xf2Gq/s25black.jpg',
        images: [
          'https://i.ibb.co/6R8Xf2Gq/s25black.jpg'
        ],
        stock: 8
      }
    ],
    emiPlans: [
      { tenureMonths: 3, interestRatePercent: 0, cashbackType: 'absolute', cashbackValue: 5000 },
      { tenureMonths: 6, interestRatePercent: 0, cashbackType: 'absolute', cashbackValue: 5000 },
      { tenureMonths: 12, interestRatePercent: 9.5, cashbackType: 'absolute', cashbackValue: 5000 },
      { tenureMonths: 24, interestRatePercent: 10.5, cashbackType: 'absolute', cashbackValue: 5000 },
      { tenureMonths: 36, interestRatePercent: 10.5, cashbackType: 'absolute', cashbackValue: 5000 }
    ]
  },

  {
    name: 'OnePlus 13 Pro',
    description:
      'EMI plans backed by mutual funds.',
    brand: 'OnePlus',
    category: 'Smartphones',
    badges: ['TRENDING'],
    mrp: 99999,
    price: 89999,
    image: 'https://i.ibb.co/Z6jGR61n/oneplus13.webp',
    finishes: [
      { name: 'Emerald Green', colorHex: '#228b22' },
      { name: 'Matte Black', colorHex: '#1a1a1a' }
    ],
    variants: [
      {
        title: 'OnePlus 13 Pro 256GB - Emerald Green',
        sku: 'OP13P-256-GR',
        price: 89999,
        mrp: 99999,
        color: 'Emerald Green',
        image: 'https://i.ibb.co/Z6jGR61n/oneplus13.webp',
        images: [],
        stock: 15
      },
      {
        title: 'OnePlus 13 Pro 512GB - Matte Black',
        sku: 'OP13P-512-BK',
        price: 99999,
        mrp: 109999,
        color: 'Matte Black',
        image: 'https://i.ibb.co/Z6jGR61n/oneplus13.webp',
        images: [
        ],
        stock: 9
      }
    ],
    emiPlans: [
      { tenureMonths: 3, interestRatePercent: 0, cashbackType: 'absolute', cashbackValue: 3000 },
      { tenureMonths: 6, interestRatePercent: 0, cashbackType: 'absolute', cashbackValue: 3000 },
      { tenureMonths: 12, interestRatePercent: 9.9, cashbackType: 'absolute', cashbackValue: 3000 },
      { tenureMonths: 24, interestRatePercent: 10.5, cashbackType: 'absolute', cashbackValue: 3000 }
    ]
  }
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');

    await Product.deleteMany({});
    console.log('Cleared existing products');

    await Product.insertMany(products);
    console.log('Seed data inserted successfully');

    mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error seeding data:', error);
    mongoose.connection.close();
  }
};

seedData();
