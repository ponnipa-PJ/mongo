const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/userrouter');

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://admin:<password>@databasename.cwrdg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

const PORT = process.env.PORT || 4000

app.listen(PORT, () => { console.log('Server is running...') });

app.get("/", (req, res) => {
  res.status(200).send("หน้าแรกของ api express");
});

app.use(foodRouter);

const cors = require('cors');
app.use(cors({origin: '*'}));

app.use((req, res, next) => {
  var err = new Error("ไม่พบ path ที่คุณต้องการ");
  err.status = 404;
  next(err);
});
