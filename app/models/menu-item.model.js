module.exports = (sequelize, Sequelize) => {
  const MenuItem = sequelize.define("menuitem", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    }
  });

  MenuItem.associate = (models) => {
    MenuItem.belongsToMany(models.MenuItem, {
      through: 'MenuToMenuItems',
      as: 'Menus',
      foreignKey: 'menuItemId'
    })
  };

  return MenuItem;
};
