module.exports = (sequelize, Sequelize) => {
  const Menu = sequelize.define('menu', {
    title: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.STRING,
    },
  });

  Menu.associate = (models) => {
    Menu.belongsToMany(models.menuitems, {
      through: 'menuToMenuItems',
    });
  };

  return Menu;
};
