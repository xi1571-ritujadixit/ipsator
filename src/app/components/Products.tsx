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
        id: string;
        image: string;
        name: string;
    };
}

interface Categories {
    id: string;
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
            <div className="flex flex-col md:flex-row">
                <Category
                    categories={categories}
                    selectedCategory={filters?.category}
                    handleFiltersChange={handleFiltersChange}
                />
                <div className="flex flex-wrap sm:w-full md:w-3/4 lg:w-5/6 justify-center items-center">
                    {filteredProducts.length ? (
                        currentProducts.map((product: Product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <>No Products Available! Select any other filters</>
                    )}
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
