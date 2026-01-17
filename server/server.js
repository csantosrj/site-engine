const express = require("express");
const path = require("path");
const todoRoutes = require("./routes/todo.routes");

const app = express();
const PORT = 3000;

// ---------- CONFIG ----------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", todoRoutes);

// ---------- START ----------
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});