import { useEffect, useState } from "react";

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

interface Props {
    products: Product[];
}

export const useProductsState = ({ products }: Props) => {
    const [startIndex, setStartIndex] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState([...products]);
    const [currentProducts, setCurrentProducts] = useState([...filteredProducts.slice(0, 10)]);
    const [filters, setFilters] = useState({ category: "all", search: "", sort: "" });

    const handleNext = () => {
        setStartIndex((prevState) => prevState + 10);
    };

    const handlePrevious = () => {
        setStartIndex((prevState) => prevState - 10);
    };

    useEffect(() => {
        setCurrentProducts([...filteredProducts.slice(startIndex, startIndex + 10)]);
    }, [startIndex]);

    useEffect(() => {
        setStartIndex(0);
        setCurrentProducts([...filteredProducts.slice(0, 10)]);
    }, [filteredProducts]);

    useEffect(() => {
        let filteredProducts = [...products];
        if (filters.category !== "all") {
            filteredProducts = filteredProducts.filter(({ category }) => category.id == filters.category);
        }
        if (filters.search) {
            filteredProducts = filteredProducts.filter(({ title }) =>
                title.toLowerCase().includes(filters.search)
            );
        }
        if (filters.sort) {
            filteredProducts = filteredProducts.sort((a, b) =>
                filters.sort === "high-to-low" ? b.price - a.price : a.price - b.price
            );
        }
        setFilteredProducts(filteredProducts);
    }, [filters]);

    const handleFiltersChange = (e: any) => {
        setFilters((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };

    return {
        handleFiltersChange,
        filters,
        currentProducts,
        handlePrevious,
        handleNext,
        startIndex,
        filteredProducts,
    };
};
