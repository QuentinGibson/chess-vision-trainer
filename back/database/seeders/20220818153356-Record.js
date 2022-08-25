"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("Records", [
      {
        name: "Quent",
        score: 30,
        mode: "med",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "smith",
        score: 2,
        mode: "short",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "patt",
        score: 5,
        mode: "short",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "kyle",
        score: 10,
        mode: "short",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "player",
        score: 15,
        mode: "med",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kendall",
        score: 35,
        mode: "med",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Paul",
        score: 10,
        mode: "long",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fred",
        score: 30,
        mode: "long",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Greg",
        score: 25,
        mode: "long",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("Records", null, {});
  },
};
