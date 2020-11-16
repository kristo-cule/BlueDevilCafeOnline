module.exports = (app) => {
  const menutomenuitems = require('../controllers/menu-to-menu-item.controller');

  const router = require('express').Router();

  // Create a new Menu Item
  router.post('/', menutomenuitems.create);

  app.use('/api/menutomenuitems', router);
};
