const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const PORT = 8080;

const connectDB = require("./config/db");
connectDB();

const userRoute = require("./routes/userRoutes");

app.use(express.json());

app.use("/", userRoute);

app.listen(PORT, () => {
    console.log("app is listening port...");
})
