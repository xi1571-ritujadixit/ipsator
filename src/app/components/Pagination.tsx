import React from "react";

interface Props {
    handlePrevious: () => void;
    handleNext: () => void;
    isPreviousDisabled: boolean;
    isNextDisabled: boolean;
}

export default function Pagination({
    handlePrevious,
    handleNext,
    isPreviousDisabled,
    isNextDisabled,
}: Props) {
    return (
        <div className="flex justify-end">
            <button
                className="rounded-lg bg-stone-300 p-2 m-2"
                onClick={handlePrevious}
                disabled={isPreviousDisabled}
            >
                Previous
            </button>
            <button
                className="rounded-lg bg-stone-300 p-2 m-2"
                onClick={handleNext}
                disabled={isNextDisabled}
            >
                Next
            </button>
        </div>
    );
}
