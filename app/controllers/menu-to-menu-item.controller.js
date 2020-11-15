const db = require("../models");
const MenuToMenuItem = db.menutomenuitem;

exports.create = (req, res) => {
  //vallidate
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  //create relation
  const menutomenuitem = {
    menuId: req.body.menuId,
    menuItemId: req.body.menuItemId
  }

  //save relation to db
  MenuToMenuItem.create(menutomenuitem)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the relation."
      });
    });
;}