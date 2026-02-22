export default function FilterSidebar({
  selectedCategory = "all",
  setSelectedCategory,
  maxPrice = 50000,
  setMaxPrice,
}) {
  const categories = [
    { label: "All Products", value: "all" },
    { label: "Sofa", value: "sofa" },
    { label: "Chair", value: "chair" },
    { label: "Table", value: "table" },
    { label: "Bed", value: "bed" },
  ];

  return (
    <div className="h-screen sticky top-0 p-8 border-r-2 border-black bg-black text-white">

      {/* CATEGORY */}
      <h3 className="text-xl font-semibold mb-6">Category</h3>

      <div className="space-y-4 mb-12">
        {categories.map((cat) => (
          <label
            key={cat.value}
            className="flex gap-3 text-sm font-medium cursor-pointer"
          >
            <input
              type="radio"
              name="category"
              checked={selectedCategory === cat.value}
              onChange={() => setSelectedCategory(cat.value)}
              className="accent-orange-500"
            />
            {cat.label}
          </label>
        ))}
      </div>

      {/* PRICE SLIDER */}
      <h3 className="text-xl font-semibold mb-6">Price</h3>

      <input
        type="range"
        min={0}
        max={50000}
        step={500}
        value={Number(maxPrice)}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        className="w-full accent-orange-500 cursor-pointer"
      />

      <div className="mt-4 text-sm font-medium text-gray-300">
        Up to{" "}
        <span className="text-orange-500 font-semibold">
          ₹ {Number(maxPrice).toLocaleString()}
        </span>
      </div>

    </div>
  );
}