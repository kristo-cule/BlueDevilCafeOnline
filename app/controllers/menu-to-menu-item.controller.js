const db = require('../models');

const MenuToMenuItems = db.menutomenuitems;

exports.create = (req, res) => {
  // Validate Request
  if (!req.body.menuId || !req.body.menuItemId) {
    res.status(400).send({
      message: 'Ids can not be empty!',
    });
    return;
  }

  // Create relation
  const menutomenuitem = {
    menuId: req.body.menuId,
    menuItemId: req.body.menuItemId,
  };

  // Save relation in the database
  MenuToMenuItems.create(menutomenuitem)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the relation.',
      });
    });
};
