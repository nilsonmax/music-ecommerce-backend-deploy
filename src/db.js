require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  //configuracion deploy
  dialectOptions:{
    ssl:{
      require:true,
      rejectUnauthorized:false
    }
  }
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Instrument, Category, Admin, Cart, Payment,User,Trolley,Transactions,Raiting, Favorite} = sequelize.models;

Admin.hasMany(Instrument);
Instrument.belongsTo(Admin);

User.hasOne(Favorite);
Favorite.belongsTo(User, {
  onDelete: "cascade",
  onUpdate: "cascade",
  hooks: true,
})

Transactions.hasOne(User);
User.belongsTo(Transactions,{
  onDelete: "cascade",
  onUpdate: "cascade",
  hooks: true,
})

Instrument.hasMany(Raiting)
Raiting.belongsTo(Instrument)

User.belongsToMany(Instrument, {
  through: Trolley,
});
Instrument.belongsToMany(User, {
  through: Trolley,
});

Category.hasMany(Instrument, {
  foreignKey:{name: "userId"},
  onDelete: "cascade",
  onUpdate: "cascade",
  hooks: true,
});
Instrument.belongsTo(Category);

Payment.belongsToMany(Cart, {
  through: "Transaction",
});
Cart.belongsToMany(Payment, {
  through: "Transaction",
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
