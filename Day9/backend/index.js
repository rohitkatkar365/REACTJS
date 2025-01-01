const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bookroute = require("./routes/bookRoute");
require("dotenv").config();

const port = process.env.PORT;
const dburl = process.env.DB_URL;

if (!port || !dburl) {
  console.error("Environment variables PORT or DB_URL are not set!");
  process.exit(1);
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api",bookroute);

app.listen(port, async () => {
  try {
    await mongoose.connect(dburl);
    console.log("DB Connected Successfully");
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
  }
  console.log(`Server running on port ${port}`);
});
