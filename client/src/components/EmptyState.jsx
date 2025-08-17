import { Link } from "react-router-dom";
import feedbackpic from "../assets/suggestions/illustration-empty.svg";

// This component is shown when no suggestions are available for the selected filter.
export default function EmptyState() {
  return (
    <div className="empty">
      {" "}
      {/* Container for empty state visuals and message */}
      {/* Show a picture indicating "no suggestions" */}
      <img
        src={feedbackpic} // Image source for the empty state illustration
        alt="black and white figure with hat and a magnifying glass"
      />
      {/* Headline message indicating empty state */}
      <p className="empty-title">
        There is no feedback yet. {/* Let user know there are no suggestions */}
      </p>
      {/* Subtext giving user encouragement to suggest something */}
      <p className="empty-subtext">
        Got a suggestion? Found a bug that needs to be squashed?
        <br /> {/* Extra message */}
        We love hearing about new ideas to improve our app.
      </p>
      {/* Button linking to the new feedback form page */}
      <Link to="/new" className="add-button">
        + Add Feedback
      </Link>
    </div>
  );
}
