import mongoose from "mongoose";

const ConnectDb = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connect to MONGODB");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default ConnectDb;
