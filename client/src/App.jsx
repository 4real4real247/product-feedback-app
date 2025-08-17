import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewSuggestionForm from "./pages/NewSuggestionForm";
import Suggestionspage from "./pages/Suggestionspage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home route that displays all suggestions */}
        <Route path="/" element={<Suggestionspage />} />

        {/* Route to add a new suggestion */}
        <Route path="/new" element={<NewSuggestionForm />} />
      </Routes>
    </Router>
  );
}
