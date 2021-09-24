const mongoose = require("mongoose");
require("dotenv").config();
function connect() {
  return mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
module.exports = connect;

//"mongodb+srv://user:edstem@cluster0.ve6n1.mongodb.net/Edstem_machine_coding?retryWrites=true&w=majority"
