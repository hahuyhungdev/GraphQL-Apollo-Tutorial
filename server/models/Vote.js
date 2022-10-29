const mongoose = require("mongoose");
const Schema = mongoose.Schema;
``;
const VoteSchema = new Schema({
  rating: {
    enum: [1, 2, 3, 4, 5],
    type: Number,
  },
  bookId: {
    type: String,
  },
});

module.exports = mongoose.model("votes", VoteSchema);
