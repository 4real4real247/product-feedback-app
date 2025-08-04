/*-------------------------
BOILERPLATE CODE TO SET UP SERVER  
-------------------------------*/
// Load the Express framework to handle web server functions
import express from "express";
// Load pg module to connect with the PostgreSQL database
import pg from "pg";
// Load configuration values (like database credentials) from an external file
import config from "./config.js";

// Create a connection pool to the PostgreSQL database using credentials from config
const db = new pg.Pool({
  connectionString: config.databaseUrl, // The address and password for the database
  ssl: true, // Use secure encrypted connection
});
// Initialize an Express application (your web server)
const app = express();
// This ensures incoming and outgoing data is in JSON format
app.use(express.json());
// Choose a port for the server to listen on
const port = 3000;
// Start the server and log a message to indicate it's running
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
//////////////////////////////////////////////////////////

////helper functions ////////

async function getAllSuggestions() {
  const result = await db.query("SELECT * FROM suggestions;");
  console.log(result);
  return result.rows;
}

/////// ADD ONE SUGGESTION ///////////////////
async function addOneSuggestion(suggestion) {
  const result = await db.query(
    "INSERT INTO suggestions (title, description, category, upvotes, status) VALUES ($1, $2, $3, $4, $5 )",
    [
      suggestion.title,
      suggestion.description,
      suggestion.category,
      suggestion.upvotes,
      suggestion.status,
    ]
  );
  return result.rows[0];
}
///////////////////////////////////////////////

////////API ENDPOINTS POST////////////////
app.get("/get-all-suggestions", async (req, res) => {
  const allSuggestions = await getAllSuggestions();
  res.json(allSuggestions);
});
/////////////////////////////////////

/////// POST one new suggestion////////
app.post("/add-one-suggestion", async (req, res) => {
  const newSuggestion = await addOneSuggestion(req.body);
  res.json(newSuggestion);
});
