"use client";
import React from "react";
import ProductCard from "./ProductCard";
import SearchAndSort from "./SearchAndSort";
import Category from "./Category";
import Pagination from "./Pagination";
import { useProductsState } from "../hooks/products";

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
    const {
        handleFiltersChange,
        filters,
        currentProducts,
        handlePrevious,
        handleNext,
        startIndex,
        filteredProducts,
    } = useProductsState({ products });

    return (
        <>
            <SearchAndSort handleFiltersChange={handleFiltersChange} />
            <div className="flex">
                <Category
                    categories={categories}
                    selectedCategory={filters?.category}
                    handleFiltersChange={handleFiltersChange}
                />
                <div className="flex flex-wrap w-5/6">
                    {currentProducts.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <Pagination
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                isPreviousDisabled={startIndex === 0}
                isNextDisabled={startIndex + 10 >= filteredProducts.length}
            />
        </>
    );
}
