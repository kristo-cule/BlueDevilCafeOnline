module.exports = (sequelize, Sequelize) => {
  const MenuItem = sequelize.define('menuItem', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
  });

  MenuItem.associate = (models) => {
    MenuItem.belongsToMany(models.menus, {
      through: 'menuToMenuItems',
    });
  };

  return MenuItem;
};
