import express from 'express';
import authRoutes from './routes/authRouters.js';
import ProductRoutes from './routes/ProductRouter.js';
import cartRoutes from "./routes/cartRouters.js"; // Add cart routes
import bodyParser from 'body-parser';  // body-parser is a middleware
import cors from 'cors';  // designed for security measures
import dotenv from 'dotenv';
import './config/db.js';


dotenv.config();

const app = express();

const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => {
  res.send("Node application");
});

app.use(bodyParser.json()); // Middleware for parsing JSON data

// Enable CORS for all routes
app.use(cors());

// Alternatively, enable CORS for specific origins
// const corsOptions = {
//   origin: " http://localhost:5173/",
//   methods: "GET, POST",
//   allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
// };

// app.use(cors(corsOptions));

// app.get("/api/data", (req, res) => {
//    res.send("CORS enabled");
//  });

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", ProductRoutes);
app.use("/api/v1/cart", cartRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
