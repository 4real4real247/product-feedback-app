// This component displays a form to add a new product suggestion and sends it to the backend.
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewSuggestionForm() {
  // State to hold the form input values
  const [form, setForm] = useState({
    title: "", // Feedback title input
    category: "", // Selected category input
    description: "", // Detailed feedback input
  });

  // State to hold validation error messages (one per field if invalid)
  const [errors, setErrors] = useState({});

  // Hook from react-router to programmatically redirect after form submit
  const navigate = useNavigate();

  // Function to validate the form fields
  const validate = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = "Title is required"; // If title is empty
    if (!form.category.trim()) errs.category = "Category is required"; // If category is empty
    if (!form.description.trim()) errs.description = "Description is required"; // If description is empty
    return errs; // Return all found errors
  };

  // Function that runs when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the page from refreshing on form submit
    const validation = validate(); // Run validation checks
    setErrors(validation); // Show validation errors if any
    if (Object.keys(validation).length > 0) return; // Stop if there are errors

    // Send the form data to the backend API
    const res = await fetch("/api/add-one-suggestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form), // Convert form object into JSON for sending
    });

    // If the request succeeded → go back to homepage
    if (res.ok) navigate("/");
    else alert("Failed to submit suggestion"); // Otherwise, show an error alert
  };

  // UI rendering of the form
  return (
    <main className="form-container">
      {/* Link to go back to previous page */}
      <a className="go-back-link" onClick={() => navigate(-1)}>
        &lt; Go Back
      </a>

      {/* Decorative circle with a plus sign */}
      <div className="circle-plus">
        <span className="plus" aria-hidden="true">
          +
        </span>
      </div>

      {/* Form heading */}
      <h2 className="form-title">Create New Feedback</h2>

      {/* Form starts here */}
      <form onSubmit={handleSubmit} className="form">
        {/* Title Field */}
        <div>
          <div className="field-title">Feedback Title</div>
          <div className="field-helper">Add a short, descriptive headline</div>
          <input
            className="input"
            value={form.title} // Controlled input tied to state
            onChange={(e) => setForm({ ...form, title: e.target.value })} // Update title in state
          />
          {errors.title && <p className="error">{errors.title}</p>}{" "}
          {/* Show validation error */}
        </div>

        {/* Category Field */}
        <div>
          <div className="field-title">Category</div>
          <div className="field-helper">
            Choose a category for your feedback
          </div>
          <select
            className="input"
            value={form.category} // Controlled value bound to state
            onChange={(e) => setForm({ ...form, category: e.target.value })} // Update category in state
          >
            <option value="">Select a category</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="Enhancement">Enhancement</option>
            <option value="Bug">Bug</option>
            <option value="Feature">Feature</option>
          </select>
          {errors.category && <p className="error">{errors.category}</p>}{" "}
          {/* Show validation error */}
        </div>

        {/* Description Field */}
        <div>
          <div className="field-title">Feedback Detail</div>
          <div className="field-helper">
            Include any specific comments on what should be improved, added,
            etc.
          </div>
          <textarea
            className="textarea"
            rows="4"
            value={form.description} // Controlled textarea
            onChange={(e) => setForm({ ...form, description: e.target.value })} // Update description in state
          ></textarea>
          {errors.description && <p className="error">{errors.description}</p>}{" "}
          {/* Show validation error */}
        </div>

        {/* Buttons Section */}
        <div className="form-buttons">
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate(-1)} // Go back without submitting
          >
            Cancel
          </button>
          <button type="submit" className="submit-button">
            Submit Feedback
          </button>
        </div>
      </form>
    </main>
  );
}
