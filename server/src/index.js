/*-------------------------
BOILERPLATE CODE TO SET UP SERVER  
-------------------------------*/

// Import (load) the Express web framework which is used to handle HTTP requests.
import express from "express";

// Import (load) the PostgreSQL connection library so we can connect and interact with the database.
import pg from "pg";

// Import configuration settings such as database url and secrets from a configuration file.
import config from "./config.js";

// Create a connection pool to PostgreSQL using the url and SSL from settings,
// so our app can talk to the database efficiently.
const db = new pg.Pool({
  connectionString: config.databaseUrl, // Use the database connection string from the config file.
  ssl: true, // Uses encrypted connection for security.
});

// Create an Express app instance, which is like your web server.
const app = express();

// Tell the Express app: "all your input and output should use JSON format".
// This is so our server and other software can communicate easily.
app.use(express.json());

// Choose a port (in this case 3000) that this server will listen for requests on.
const port = 3000;

// Start the Express web server on our chosen port.
// Once started, print a message to the terminal to let us know it's running.
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
//////////////////////////////////////////////////////////

////helper functions ////////

// This function will get ALL suggestions from the database.
// It does this by running a SQL query that selects everything in the "suggestions" table.
// The results get printed to the console for debugging, and then only the data rows are returned.
async function getAllSuggestions() {
  const result = await db.query("SELECT * FROM suggestions;"); // Fetch all rows from suggestions.
  console.log(result); // (For debugging) Print SQL result to the console.
  return result.rows; // Return only the array of records (not the entire result object).
}

// This function will ADD one new suggestion into the "suggestions" table in the database.
// It expects an object with title, description, category, upvotes, and status.
// It uses a SQL query to INSERT the values safely with parameter substitution.
async function addOneSuggestion(suggestion) {
  const result = await db.query(
    // Insert a new row into the suggestions table with 5 fields.
    "INSERT INTO suggestions (title, description, category, upvotes, status) VALUES ($1, $2, $3, $4, $5 ) RETURNING *",
    [
      suggestion.title, // $1 in the SQL statement.
      suggestion.description, // $2
      suggestion.category, // $3
      suggestion.upvotes ?? 0, // $4
      suggestion.status ?? "open", // $5
    ]
  );
  // Return the first row created (NOTE: this is always undefined, unless you use 'RETURNING *' in your query)
  return result.rows[0]; // (But with this query, nothing is returned so this will usually be undefined)
}
///////////////////////////////////////////////

////////API ENDPOINTS////////////////

// Define an endpoint called "/get-all-suggestions" for GET requests.
// When someone visits this URL, the server gets all suggestions from the database and sends them back as JSON.
app.get("/get-all-suggestions", async (req, res) => {
  const allSuggestions = await getAllSuggestions(); // Call the function to fetch all suggestions.
  res.json(allSuggestions); // Send the results back to the client as JSON.
});

/////// POST one new suggestion////////

// Define a POST endpoint called "/add-one-suggestion".
// When someone sends a POST request , the server
// takes the data they sent (req.body), adds it as a new suggestion to the database
// and responds with the newly added suggestion as JSON.
app.post("/add-one-suggestion", async (req, res) => {
  const newSuggestion = await addOneSuggestion(req.body); // req.body contains the suggestion details sent by the client.
  res.json(newSuggestion); // Respond with the newly inserted suggestion
});
