// src/components/FilterButtons.jsx
import React from "react";

function FilterButtons({ selectedFilter, onFilterChange }) {
  const filters = ["All", "React", "Kotlin", "Unity", "JavaScript", "VR"];

  return (
    <div className="flex gap-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 rounded ${
            selectedFilter === filter
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
