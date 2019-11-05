const Mongoose = require("mongoose");

const database = "RegistrerDB",
  port = "27017",
  host = "localhost";

const uri = `mongodb://${host}:${port}/${database}`;

const connect = async () => {
  try {
    await Mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Conectado :v");
  } catch (e) {
    console.log(e);
  }
};

module.exports = { connect };