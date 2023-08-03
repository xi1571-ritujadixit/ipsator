import React from "react";

interface Props {
    handleFiltersChange: (params: any) => void;
}

export default function SearchAndSort({ handleFiltersChange }: Props) {
    return (
        <div className="flex justify-around items-center">
            <div>
                <label htmlFor="search">Search:</label>
                <input
                    type="text"
                    id="search"
                    name="search"
                    onChange={handleFiltersChange}
                    className="rounded-lg shadow-lg p-2 mx-4 bg-slate-50"
                />
            </div>

            <div>
                <label htmlFor="sort-by">Sort by:</label>
                <select name="sort" id="sort-by" onChange={handleFiltersChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="low-to-high">Price - low to high</option>
                    <option value="high-to-low">Price - high to low</option>
                </select>
            </div>
        </div>
    );
}
