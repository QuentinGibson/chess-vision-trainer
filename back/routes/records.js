const express = require("express");
const router = express.Router();
const {
  createRecord,
  getAllRecords,
  deleteRecord,
  updateRecord,
} = require("../controllers/records");

/* GET users listing. */
router.get("/", getAllRecords);
router.post("/", createRecord);
// router.delete("/:id", deleteRecord);
// router.put("/:id", updateRecord);

module.exports = router;
