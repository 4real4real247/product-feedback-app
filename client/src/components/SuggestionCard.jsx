// Component to display a single suggestion card
export default function SuggestionCard({ suggestion }) {
  return (
    <div className="card">
      {" "}
      {/* Card container for one suggestion */}
      {/* Suggestion title */}
      <h3 className="card-title">
        {suggestion.title} {/* Render the title from suggestion object */}
      </h3>
      {/* Suggestion description */}
      <p className="card-description">
        {suggestion.description} {/* Render the description */}
      </p>
      {/* Suggestion category */}
      <div className="card-category">
        {suggestion.category} {/* Render category label */}
      </div>
    </div>
  );
}
