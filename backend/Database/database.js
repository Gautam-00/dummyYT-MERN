require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Local MongoDB"))
  .catch((err) => console.log("DB Connection Error:", err));
