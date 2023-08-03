import React from "react";

interface Categories {
    id: string;
    name: string;
}

interface Props {
    categories: Categories[];
    selectedCategory: string;
    handleFiltersChange: (params: any) => void;
}

export default function Category({ categories, selectedCategory, handleFiltersChange }: Props) {
    return (
        <div className="border border-gray-500 m-4 rounded-lg px-2 py-3 sm:w-full md:w-1/4 lg:w-1/6 min-w-max h-full">
            <fieldset>
                <legend>Category:</legend>
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="all"
                        name="category"
                        value="all"
                        checked={selectedCategory === "all"}
                        onChange={handleFiltersChange}
                    />
                    <label htmlFor="all" className="px-2">
                        All
                    </label>
                </div>
                {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                        <input
                            type="radio"
                            id={category.id}
                            name="category"
                            value={category.id}
                            checked={selectedCategory == category.id}
                            onChange={handleFiltersChange}
                        />
                        <label htmlFor={category.id} className="px-2">
                            {category.name}
                        </label>
                    </div>
                ))}
            </fieldset>
        </div>
    );
}
