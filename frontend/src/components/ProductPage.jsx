import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedPlan, setSelectedPlan] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => console.error("Error fetching product:", err));
    }, [id]);

    if (!product) return <div className="text-center py-20">Loading...</div>;

    const { name, variants, emiPlans, badges } = product;
    const selectedVariant = variants[selectedColor];

    return (
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-8 bg-gray-50 min-h-screen">
            {/* LEFT SECTION */}
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-[40%] relative">
                {/* 🔴 Badges */}
                {badges && badges.length > 0 && (
                    <div className="absolute top-0 left-0 flex gap-2">
                        {badges.map((badge, i) => (
                            <span
                                key={i}
                                className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                )}

                {/* 🧾 Product Name */}
                <h1 className="text-3xl font-bold">{name}</h1>

                {/* 🖼️ Product Image */}
                <img
                    src={selectedVariant.image}
                    alt={name}
                    className="rounded-xl object-contain mb-4"
                />

                {/* 🎨 Color Selectors */}
                <div className="flex gap-3 mt-2 justify-center">
                    {variants.map((v, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedColor(i)}
                            className={`w-6 h-6 rounded-full border-2 transition ${selectedColor === i
                                ? "border-black scale-110"
                                : "border-gray-300"
                                }`}
                            style={{ backgroundColor: v.colorHex }}
                        />
                    ))}
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {variants[selectedColor]?.title}
                </h2>
                {/* 💰 Pricing */}
                <div className="mb-4">
                    <p className="text-gray-500 line-through text-lg">
                        ₹{selectedVariant.mrp.toLocaleString()}
                    </p>
                    <p className="text-3xl font-bold text-blue-700">
                        ₹{selectedVariant.price.toLocaleString()}
                    </p>
                </div>

                {/* 🏷️ Description */}
                <p className="text-gray-600 font-semibold mb-6">{product.description}</p>

                <div className="space-y-2">
                    {emiPlans.map((plan, i) => {
                        // calculate monthly amount dynamically
                        const price = variants[selectedColor]?.price || product.price || 0;
                        const interestRate = plan.interestRatePercent || 0;
                        const months = plan.tenureMonths || 1;

                        const totalAmount =
                            interestRate > 0
                                ? price * (1 + interestRate / 100)
                                : price;

                        const monthlyAmount = Math.round(totalAmount / months);

                        const isSelected = selectedPlan === i;
                        return (
                            <div
                                key={i}
                                onClick={() => setSelectedPlan(i)}
                                className={`cursor-pointer flex justify-between items-center py-3 px-3 border rounded-lg transition 
                  ${isSelected
                                        ? "border-blue-600 bg-blue-50"
                                        : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                                    }`}
                            >
                                <div>
                                    <p>
                                        ₹{monthlyAmount.toLocaleString()} × {months} months
                                    </p>
                                    {plan.cashbackValue > 0 && (
                                        <p className="text-green-600 text-sm">
                                            Cashback ₹{plan.cashbackValue.toLocaleString()}
                                        </p>
                                    )}
                                </div>
                                <p className="text-sm text-gray-600">
                                    {interestRate}% interest
                                </p>
                            </div>
                        );
                    })}
                </div>
                {selectedPlan !== null && (
                    <div className="mt-6 text-center">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
                            Proceed with Payment
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
