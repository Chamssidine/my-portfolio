/* eslint-disable react/prop-types */
function FilterButtons({ filters, selectedFilter, onFilterChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={`shrink-0 rounded-full border px-4 py-2 text-sm font-black transition ${
            selectedFilter === filter
              ? "border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-200"
              : "border-slate-200 bg-white/80 text-slate-600 hover:border-sky-300 hover:text-slate-950"
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
