const db = require("../database/models");

module.exports = {
  createRecord: async function (req, res, next) {
    const { record } = req;
    await db.Record.create(record)
      .then(() => {
        res.json({ message: "Record created successfully" });
      })
      .catch((error) => res.status(500).json({ message: error }));
  },
  deleteRecord: async function (req, res, next) {
    const { id } = req.params;
    await db.Record.destroy({ where: { id } })
      .then(() => {
        res.status(200).json({ message: "Record deleted successfully" });
      })
      .catch((error) => res.status(500).json({ message: error }));
  },
  getAllRecords: async function (req, res, next) {
    await db.Record.findAll()
      .then((result) => {
        res.status(202).json({ message: "Records found!", records: result });
      })
      .catch((error) => res.status(500).json({ message: error }));
  },
  updateRecord: async function (req, res, next) {
    const { id } = req.params;
    const { record } = req.body;
    await db.Records.update(record, { where: id })
      .then((result) => {
        res.status(202).json({ message: "Record Updated!" });
      })
      .catch((error) => {
        res.status(500).json({ message: error });
      });
  },
};
