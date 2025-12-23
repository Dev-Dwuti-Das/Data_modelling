
import express from "express"
import dotenv from "dotenv";
import mongoose  from "mongoose";
import router from "./routers/router.js";

dotenv.config();
const app = express();
const port = 3000;


app.use(express.json())
app.use("/student",router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(`${process.env.MONGO}`);
  console.log("done");
}

  