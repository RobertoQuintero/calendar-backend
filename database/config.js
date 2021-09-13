const mongoose = require("mongoose");
const { options } = require("../routes/auth");
// const object = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreatedIndex: true,
// };

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log("DB online");
  } catch (error) {
    console.log(error);
    throw new Error("Error al inicializar DB");
  }
};

module.exports = {
  dbConnection,
};
