import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuggestionCard from "../components/SuggestionCard";
import EmptyState from "../components/EmptyState";

// Create a list of category names that will be shown as filter buttons.
// Always show these six categories as filter buttons.
const categories = ["All", "UI", "UX", "Feature", "Bug", "Enhancement"];

// Start building the main React component
export default function Suggestionspage() {
  // Create a piece of state called suggestions to store the list of feedback items. It starts as an empty list
  const [suggestions, setSuggestions] = useState([]);
  // Create another state variable called filter to track the selected category.
  // By default, it's set to "All" (so it shows everything).
  const [filter, setFilter] = useState("All");
  //hamburger button on mobile
  const [menuOpen] = useState(false);
  //
  const handleCategoryClick = (cat) => {
    setFilter(cat);
  };

  // When this component loads for the first time:
  useEffect(() => {
    // Send a request to the backend to get all the suggestions
    fetch("/api/get-all-suggestions")
      // When the response arrives, convert it to JSON.
      .then((res) => res.json())
      // Store that data inside the suggestions state.
      .then((data) => setSuggestions(data))
      // If something goes wrong, show an error in the console.
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  // // Decide which suggestions to show, based on the active filter
  const filtered =
    filter === "All"
      ? // If "All" is selected, show every suggestion
        suggestions
      : // Otherwise, only show suggestions in the chosen category
        suggestions.filter((s) => s.category === filter);

  return (
    <div className="suggestions-layout">
      {/* Overall layout container for sidebar + main content */}

      {/* SIDEBAR */}
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        {/* If "menuOpen" is true, sidebar gets the "open" class; otherwise it stays closed */}

        {/* Company Branding section */}
        <div className="brand-card">
          <div className="brand-title">My Company</div>
          <div className="brand-subtitle">Feedback Board</div>
        </div>

        {/* Category filter buttons */}
        <div className="filter-card">
          <div className="category-tabs">
            {/* Loop through all categories and create a button for each */}
            {categories.map((cat) => (
              <button
                key={cat} // unique key for each button
                className={"pill-button" + (filter === cat ? " selected" : "")}
                // When clicked, set this category as the active filter
                onClick={() => handleCategoryClick(cat)}
                type="button"
              >
                {cat} {/* Show the category name on the button */}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {/* Header area showing total suggestions and the add button */}
        <div className="header suggestions-header">
          <span className="suggestions-count">
            {filtered.length} Suggestions
            {/* Show how many suggestions match the active filter */}
          </span>
          {/* Button to go to "Add New Feedback" page */}
          <Link to="/new" className="add-button">
            + Add Feedback
          </Link>
        </div>

        {/* List of suggestions */}
        <section className="suggestions suggestions-list">
          {filtered.length === 0 ? (
            <EmptyState />
          ) : (
            // If there are no suggestions, show an empty state message
            filtered.map((s) => <SuggestionCard key={s.id} suggestion={s} />)
            // Otherwise, render each suggestion inside a "SuggestionCard"
          )}
        </section>
      </main>
    </div>
  );
}
