const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 9000;

// middle ware
app.use(cors());
app.use(express.json());
// middle ware
// router import
const useRouter = require("./Route/Route");
// root route
app.use("/", useRouter);
app.get("/", async (req, res) => {
  try {
    res.send({
      success: true,
      message: "server is running port ",
    });
  } catch (error) {
    console.log(error.massage);
  }
});
// root route

app.listen(port, () => {
  console.log("server is ready");
});
