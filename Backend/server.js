const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
// const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));


const mongoUrl = "mongodb+srv://meet:root@cluster0.dwlx0zc.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      username,
      email,
      password
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ error: "User Not found" });
  }

  if (password == user.password) {
    if (res.status(201)) {
        console.log("ok")
    //   return res.json({ status: "ok", data: token });
      return res.json({ status: "ok" });
    } 
    else {
      return res.json({ error: "error" });
    }
  }

  res.json({ status: "error", error: "Invalid Password" });
});

app.listen(5000, () => {
    console.log("Server Started");
});