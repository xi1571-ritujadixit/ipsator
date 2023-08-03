import React from "react";

interface Props {
    handleFiltersChange: (params: any) => void;
}

export default function SearchAndSort({ handleFiltersChange }: Props) {
    return (
        <div className="flex flex-col md:flex-row justify-around items-center mb-4">
            <div>
                <label htmlFor="search">Search:</label>
                <input
                    type="text"
                    id="search"
                    name="search"
                    onChange={handleFiltersChange}
                    className="rounded-lg shadow-lg p-2 mx-4 bg-slate-50 border border-gray-500"
                />
            </div>

            <div>
                <label htmlFor="sort-by">Sort by:</label>
                <select
                    name="sort"
                    id="sort-by"
                    onChange={handleFiltersChange}
                    className="rounded-lg shadow-lg p-2 mx-4 bg-slate-50 border border-gray-500"
                >
                    <option value="">--Please choose an option--</option>
                    <option value="low-to-high">Price - low to high</option>
                    <option value="high-to-low">Price - high to low</option>
                </select>
            </div>
        </div>
    );
}
