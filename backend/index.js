const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//-------------------------------------------------------------

const User = require("./Models/UserSchema");
const Feedback = require("./Models/FeedbackSchema");
const Dish = require("./Models/DishesSchema");
const Comments = require("./Models/CommentSchema");

//-------------------------------------------------------------

let url =
  "mongodb+srv://Khuzaima1896:amnaamna@cluster0.b63hjrb.mongodb.net/test";

mongoose
  .connect(url)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch(() => {
    console.log("Something went Wrong while Connecting to Database");
  });

//-------------------------------------------------------------

const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;

//-------------------------------------------------------------

app.post("/api/register", async (req, res) => {
  try {
    const user = await new User(req.body);
    const count = await User.find({});

    if (count.length == 0) {
      user.userid = 1;
    } else {
      let id = count[count.length - 1].userid + 1;
      user.userid = id;
    }

    user.save().then((response) => {
      res.json({ status: response });
    });
  } catch (error) {
    res.json({ status: "error" });
  }
});

app.post("/api/login", async (req, res) => {
  const result = await User.findOne({
    full_name: req.body.full_name,
    password: req.body.password,
  })
    .then((obj) => {
      console.log("xxxxxx", obj, "xxxxx");
      if (obj) {
        res.json({ found: true, object: obj });
      } else {
        res.json({ found: false });
      }
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/givefeedbacks", async (req, res) => {
  try {
    const feed = await new Feedback(req.body);
    feed.save().then((response) => {
      console.log(response);
      res.json({ status: response });
    });
  } catch (error) {
    res.json({ status: "error" });
  }
});

app.post("/api/getDishes", async (req, res) => {
  const result = await Dish.find({}, { _id: 0 })
    .then((response) => {
      res.send(response);
    })
    .catch({ message: "error" });
});

//-------------------------------------------------------------

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//-------------------------------------------------------------

app.post("/api/getUsers", async (req, res) => {
  const result = await User.find({}, { _id: 0 })
    .then((response) => {
      res.send(response);
    })
    .catch({ message: "error" });
});

app.post("/api/deleteUser", async (req, res) => {
  const result = await User.deleteOne({
    userid: req.body.userid,
  });
  if (result.deletedCount == 1) {
    console.log("User deleted");
  } else {
    console.log("User not found");
  }
  res.send({ status: result });
});

app.post("/api/blockUser", async (req, res) => {
  await User.updateOne({ userid: req.body.userid }, { isBlock: true })
    .then((response) => {
      console.log(response);
      res.send({ blocked: response.modifiedCount });
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/api/unBlockUser", async (req, res) => {
  await User.updateOne({ userid: req.body.userid }, { isBlock: false })
    .then((response) => {
      console.log(response);
      res.send({ unblocked: response.modifiedCount });
    })
    .catch((err) => {
      res.send(err);
    });
});
