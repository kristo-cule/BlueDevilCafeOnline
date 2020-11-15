module.exports = app => {
    const menus = require("../controllers/menu.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Menu Item
    router.post("/", menus.create);
  
    // Retrieve all Menu Items
    router.get("/", menus.findAll);
  
    // Retrieve a single Menu Item with id
    router.get("/:id", menus.findOne);
  
    // Update a Menu Item with id
    router.put("/:id", menus.update);
  
    // Delete a Menu Item with id
    router.delete("/:id", menus.delete);
  
    // Delete all Menu Items
    router.delete("/", menus.deleteAll);

    // view all menu items for menu
    router.get("/menu/:id", menus.findItems)
  
    app.use('/api/menus', router);
  };
  