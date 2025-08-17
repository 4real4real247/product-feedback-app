// Define a list of categories that the user can filter by
const categories = ["All", "UI", "UX", "Feature", "Bug", "Enhancement"];

// Component for showing and selecting categories
export default function CategoryFilter({ selected, onChange }) {
  return (
    <div className="category-filter">
      {/* Loop through each category and render a button */}
      {categories.map((cat) => (
        <button
          key={cat} // Give each button a unique key (required by React)
          className={`category-button ${selected === cat ? "selected" : ""}`}
          // Apply the "selected" class if this category is the currently chosen one
          onClick={() => onChange(cat)} // When button is clicked, call onChange with this category
        >
          {cat} {/* Show the category name on the button */}
        </button>
      ))}
    </div>
  );
}
