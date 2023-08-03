"use client";
import React, { useEffect, useState } from "react";
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

interface Categories {
    id: number;
    name: string;
}

interface Props {
    products: Product[];
    categories: Categories[];
}

export default function Products({ products, categories }: Props) {
    const [startIndex, setStartIndex] = useState(0);
    const [currentProducts, setCurrentProducts] = useState([...products.slice(startIndex, 10)]);
    const [selectedCategory, setSelectedCategory] = useState();

    const handleNext = () => {
        setStartIndex((prevState) => prevState + 10);
    };

    const handlePrevious = () => {
        setStartIndex((prevState) => prevState - 10);
    };

    useEffect(() => {
        setCurrentProducts([...products.slice(startIndex, startIndex + 10)]);
    }, [startIndex]);

    const radioChangeHandler = (e: any) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <>
            <div className="flex justify-around items-center">
                <div>
                    <label htmlFor="search">Seach:</label>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        className="rounded-lg shadow-lg p-3 mx-4 bg-slate-50"
                    />
                </div>

                <div>
                    <label htmlFor="sort-by">Sort by:</label>
                    <select name="sort" id="sort-by">
                        <option value="">--Please choose an option--</option>
                        <option value="low-to-high">Price - low to high</option>
                        <option value="high-to-low">Price - high to low</option>
                    </select>
                </div>
            </div>
            <div className="flex">
                <div className="border border-gray-500 m-4 rounded-lg px-2 py-3 w-1/6 h-full">
                    <fieldset>
                        <legend>Category:</legend>
                        {categories.map((category) => (
                            <div key={category.id} className="flex items-center">
                                <input
                                    type="radio"
                                    id="category.id"
                                    name={category.name}
                                    value={category.name}
                                    checked={selectedCategory === category.name}
                                    onChange={(e) => radioChangeHandler(e)}
                                />
                                <label htmlFor="category.id" className="px-2">
                                    {category.name}
                                </label>
                            </div>
                        ))}
                    </fieldset>
                </div>
                <div className="flex flex-wrap w-5/6">
                    {currentProducts.map((product: any) => (
                        <div
                            key={product.id}
                            className="border border-gray-500 m-4 rounded-lg flex flex-col w-1/4"
                        >
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
                    ))}
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    className="rounded-lg bg-stone-300 p-2 m-2"
                    onClick={handlePrevious}
                    disabled={startIndex === 0}
                >
                    Previous
                </button>
                <button
                    className="rounded-lg bg-stone-300 p-2 m-2"
                    onClick={handleNext}
                    disabled={startIndex + 10 >= products.length}
                >
                    Next
                </button>
            </div>
        </>
    );
}