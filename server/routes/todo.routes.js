const express = require("express");
const router = express.Router();
const controller = require("../controllers/todo.controller");

// LIST
router.get("/", controller.list);

// CREATE
router.post("/todos", controller.create);

// COMPLETE
router.post("/todos/:id/complete", controller.complete);

// DELETE
router.post("/todos/:id/delete", controller.remove);

module.exports = router;