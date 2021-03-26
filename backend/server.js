import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/error.js";

// import Routes here;
import users from "./routes/users.js";
import auth from "./routes/auth.js";
import properties from "./routes/properties.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// use Routes;
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/properties", properties);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));

// HAndle unhandled promise rejections; (async await için global unhadled rejection ayarlaması)
// try catch yapmak yerine eğer herhangi bir async await fonksiyonu error a düşerse burda ayarladığımız şey çalışıyo ve error u handle ediyo; try catch de yapsak olurdu: config dosyasındaki db.js için bu
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error from unhandledRejection in server.js: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
