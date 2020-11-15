const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  define: {
    timestamps: false
  },

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

Object.keys(db).forEach(modelName => {
  if(db[modelName].assocate) {
    db[modelName].assocate(db);
  }
})

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.menuitems = require("./menu-item.model.js")(sequelize, Sequelize);
db.menus = require("./menu.model.js")(sequelize, Sequelize);

module.exports = db;
