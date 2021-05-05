const mongoose = require("mongoose");
// require("./db/conn");
mongoose
  .connect("mongodb://localhost:27017/students-api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection is established!");
  })
  .catch((e) => {
    console.log("No Connection!");
  });
