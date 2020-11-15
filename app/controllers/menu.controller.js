const db = require('../models');

const Menus = db.menus;
const MenuItems = db.menuitems;

// Create and Save a new Menu Item
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a Menu
  const menu = {
    title: req.body.title,
    date: req.body.date,
  };

  // Save Menu Item in the database
  Menus.create(menu)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the menu.',
      });
    });
};

// Retrieve all Menu Items from the database.
exports.findAll = (req, res) => {
  Menus.findAll({ include: MenuItems })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving menus.',
      });
    });
};

// Find a single Menu Item with an id
exports.findOne = (req, res) => {
  const { id } = req.params;

  Menus.findByPk(id, { include: MenuItems })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving menu with id: ${id}`,
      });
    });
};

// Update a Menu by the id in the request
exports.update = (req, res) => {
  const { id } = req.params;

  Menus.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'Menu was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Menu with id=${id}. Maybe Menu was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Menu with id=${id}`,
      });
    });
};

// Delete a Menu with the specified id in the request
exports.delete = (req, res) => {
  const { id } = req.params;

  Menus.destroy({
    where: { id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'Menu was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete Menu with id=${id}. Maybe Menu was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete Menu with id=${id}`,
      });
    });
};

// Delete all Menus from the database.
exports.deleteAll = (req, res) => {
  Menus.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Menus were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all menus.',
      });
    });
};
