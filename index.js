const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/userrouter');

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://admin:1234@coindb.cwrdg.mongodb.net/mongo-test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.listen(4000, () => { console.log('Server is running...') });

app.get("/", (req, res) => {
  res.status(200).send("หน้าแรกของ api express");
});

app.use(foodRouter);

const cors = require('cors');
app.use(cors({origin: 'http://localhost:8100/*'}));

app.use((req, res, next) => {
  var err = new Error("ไม่พบ path ที่คุณต้องการ");
  err.status = 404;
  next(err);
});