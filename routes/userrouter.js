// Userrouter.js

var express = require("express");
var router = express.Router();
var User = require("../models/usermodel");

// GET all
router.get("/user", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  User.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/user/:_id", (req, res) => {
  User.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/user", (req, res) => {
  console.log(req.body);
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  var obj = new User(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย");
  });
});

// PUT (update current data)
router.put("/user/:_id", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  User.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
  });
});

// DELETE (delete 1 data)
router.delete("/user/:_id", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Session-Id');
  res.setHeader('Access-Control-Allow-Credentials', true);
  User.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;