import React from "react";
import ProductCard from "./ProductCard";

const sampleProducts = [
  {
    id: 1,
    title: "Calculus Textbook",
    price: 45,
    image: "https://i.ebayimg.com/images/g/ldoAAOSwsideojgg/s-l960.webp",
    seller: "Andrew Samountry",
    condition: "Good",
  },
  {
    id: 2,
    title: "Desk Lamp",
    price: 15,
    image: "https://i.ebayimg.com/images/g/ltIAAOSw0uZlqFIg/s-l400.jpg",
    seller: "Rachel Garcia",
    condition: "Like New",
  },
  {
    id: 3,
    title: "Dorm Chair",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=1000",
    seller: "Dr. Brodie",
    condition: "Fair",
  },
];

function ProductGrid() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
