const express = require("express");
const app = express();
const PORT = 1919;

console.log("Server starting...");

// Initial data
let data = ["Raj"];

// Middleware to parse JSON data from the request body
app.use(express.json());

// CRUD Methods: Create (POST), Read (GET), Update (PUT), Delete (DELETE)

// Home route (GET request)
app.get("/", (req, res) => {
  res.send(`
    <body>
      <p>${JSON.stringify(data)}</p>
    </body>`);
});

// Dashboard route (GET request)
app.get("/dashboard", (req, res) => {
  res.send("This is the Dashboard");
});

// API route to send current data (GET request)
app.get("/api", (req, res) => {
  res.send(data);
});

// POST route to receive data and update it (POST request)
app.post("/api", (req, res) => {
  const entry = req.body;

  if (entry === "null") {
    res.sendStatus(404);
  } else {
    res.sendStatus(201);
    data.push(entry.name);
    console.log(entry);
  }
});

app.delete("/api", (req, res) => {
  res.sendStatus(201);
  const del = req.body;
  data.pop(del);
});

// Start the server
app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));
