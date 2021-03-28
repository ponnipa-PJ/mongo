var mongoose = require("mongoose");

var userSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    name: {
      type: String
    },
    price: {
      type: Number
    }
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "user"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
const User = mongoose.model("users", userSchema);
module.exports = User;