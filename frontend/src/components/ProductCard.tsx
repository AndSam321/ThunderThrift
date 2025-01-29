import React from 'react';
import { Heart } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  seller: string;
  condition: string;
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="h-5 w-5 text-simpson-red" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h3>
        <p className="text-xl font-bold text-simpson-red mb-2">${product.price}</p>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{product.seller}</span>
          <span className="px-2 py-1 bg-gray-100 rounded-full">{product.condition}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;