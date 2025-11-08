import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products/all") // adjust backend URL if needed
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <div
                    key={product._id}
                    className="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col"
                >
                    <div className="relative w-full h-64 bg-gray-100">
                        <img
                            src={product.image || product.images?.[0]}
                            alt={product.name}
                            className="w-full h-full object-contain"
                            // onError={(e) => {
                            //     e.target.src = "https://via.placeholder.com/400x400?text=Image+Unavailable";
                            // }}
                        />
                    </div>

                    <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                        <p className="text-gray-500 text-sm">{product.brand}</p>
                        {/* <p>{product.image}</p> */}
                        <div className="mt-auto pt-4">
                            <p className="text-xl font-bold text-blue-700">₹{product.price}</p>
                            <Link
                                to={`/product/${product._id}`}
                                className="mt-3 inline-block px-4 py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsList; // ✅ default export
