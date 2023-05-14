const express = require("express");
const route = express.Router();
// get route
route.get("/", async (req, res) => {
  try {
    res.send({ success: true, message: "About Route" });
  } catch (error) {
    console.log(error.message);
  }
});
// get route
// post route
route.post("/post", async (req, res) => {
  try {
    const registerData = req.body;
    const { password, confirmPassword } = req.body;
    // validation password
    if (password !== confirmPassword) {
      return res.send({ error: "password is Not Match" });
    }
    // validation password
    if (registerData) {
      res.send({
        success: true,
        message: "register Success",
        data: registerData,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});
// post route
// delete route
route.delete("/post", async (req, res) => {
  try {
    res.send({
      success: true,
      message: `delete  ${req.query.name} ${req.query.age} ${req.query.marride}`,
    });
  } catch (error) {
    console.log(error.message);
  }
});
// delete route
module.exports = route;
