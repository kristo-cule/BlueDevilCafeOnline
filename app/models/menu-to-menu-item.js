module.exports = (sequelize, Sequelize) => {
  const MenuToMenuItems = sequelize.define("MenuToMenuItems", {
    menuItemId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'menuitems',
        key: 'id'
      }
    },
    menuId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'menus',
        key: 'id'
      }
    }
  });

  return MenuToMenuItems;
}