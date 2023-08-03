import React from "react";
import Image from "next/image";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        image: string;
        name: string;
    };
}

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <div className="border border-gray-500 m-4 rounded-lg flex flex-col w-1/4">
            <div className="relative h-60">
                <Image
                    src={product.category.image}
                    fill={true}
                    alt={product.description}
                    className="rounded-t-lg"
                />
            </div>
            <div className="p-3 border border-b-gray-500">{product.description}</div>
            <div className="p-3">
                <div>₹ {product.price}</div>
                <div>{product.title}</div>
                <div>{product.id}</div>
            </div>
        </div>
    );
}
