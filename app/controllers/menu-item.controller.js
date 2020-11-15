const db = require("../models");
const MenuItem = db.menuitems;
const Op = db.Sequelize.Op;

// Create and Save a new Menu Item
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Menu
  const menuitem = {
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  };

  // Save Menu Item in the database
  MenuItem.create(menuitem)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the menu item."
      });
    });
};

// Retrieve all Menu Items from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;

  MenuItem.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving menu items."
      });
    });
};

// Find a single Menu Item with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  MenuItem.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving menu item with id: " + id
      });
    });
};

// Update a MenuItem by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  MenuItem.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "MenuItem was updated successfully."
        });
      } 
      else {
        res.send({
          message: `Cannot update MenuItem with id=${id}. Maybe MenuItem was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating MenuItem with id=" + id
      });
    });
};

// Delete a MenuItem with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  MenuItem.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "MenuItem was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete MenuItem with id=${id}. Maybe MenuItem was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete MenuItem with id=" + id
      });
    });
};

// Delete all MenuItems from the database.
exports.deleteAll = (req, res) => {
  MenuItem.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} MenuItems were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all menuitems."
      });
    });
};