module.exports = app => {
  const menuitems = require("../controllers/menu-item.controller.js");

  var router = require("express").Router();

  // Create a new Menu Item
  router.post("/", menuitems.create);

  // Retrieve all Menu Items
  router.get("/", menuitems.findAll);

  // Retrieve a single Menu Item with id
  router.get("/:id", menuitems.findOne);

  // Update a Menu Item with id
  router.put("/:id", menuitems.update);

  // Delete a Menu Item with id
  router.delete("/:id", menuitems.delete);

  // Delete all Menu Items
  router.delete("/", menuitems.deleteAll);

  app.use('/api/menuitems', router);
};
