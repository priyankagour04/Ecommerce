const express = require("express");
const app = express();
const authRoutes = require("./routes/authRouters.js");
const ProductRoutes = require('./routes/ProductRouter.js')
const bodyParser = require("body-parser"); // body-parser is a middleware
const cors = require("cors"); // designed for security measures   // Allow a React app on localhost:3000 to communicate with a backend API on localhost:5000

require("dotenv").config();
require("./config/db.js");

const PORT = process.env.PORT || 8081;

app.get("/", (req, resp) => {
  resp.send("Node application");
});

app.use(bodyParser.json()); // Middleware for parsing JSON data

// Enable CORS for all routes
app.use(cors());

// // Alternatively, enable CORS for specific origins
// const corsOption = {
//   origin: " http://localhost:5173/",
//   method: "GET, POST",
//   allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
// };

// app.use(cors(corsOption));
// app.get("/api/data", (req, resp) => {
//    resp.send("cors enabled");
//  });

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", ProductRoutes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
