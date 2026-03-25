const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();
