import React from "react";

interface Categories {
    id: number;
    name: string;
}

interface Props {
    categories: Categories[];
    selectedCategory: string;
    handleFiltersChange: (params: any) => void;
}

export default function Category({ categories, selectedCategory, handleFiltersChange }: Props) {
    return (
        <div className="border border-gray-500 m-4 rounded-lg px-2 py-3 w-1/6 h-full">
            <fieldset>
                <legend>Category:</legend>
                {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                        <input
                            type="radio"
                            id="category.id"
                            name="category"
                            value={category.name}
                            checked={selectedCategory === category.name}
                            onChange={handleFiltersChange}
                        />
                        <label htmlFor="category.id" className="px-2">
                            {category.name}
                        </label>
                    </div>
                ))}
            </fieldset>
        </div>
    );
}
