const mongoose = require("mongoose");
var slugify = require("slugify");
const Schema = mongoose.Schema;
const BookSchema = new Schema(
  {
    name: {
      type: String,
    },
    genre: {
      type: String,
    },
    authorId: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
BookSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model("books", BookSchema);
