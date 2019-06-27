const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const Threads = new Schema({
  _id: ObjectId,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: Array
  },
  username: {
    type: ObjectId,
    ref: 'User'
},
  date: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  }

});


module.exports = mongoose.model("Threads", Threads);