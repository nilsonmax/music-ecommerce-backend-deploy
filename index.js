const server = require('./src/app.js');
const { conn } = require("./src/db.js");
const { allData } = require("./src/bulkCreate.js");

conn.sync({ force: true }).then(() => {
  try {
    server.listen(process.env.PORT, async() => {
      await allData();
      console.log("Data loaded");
      console.log(`%s listening at ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
});
 
