const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  asin: {
    type: String,
  },
  title: {
    type: String,
  },
  authors: {
    type: String,
  },
  highlights: {
    type: Array,
  },
  //   date: {
  //     type: Date,
  //     default: Date.now,
  //     required: true,
  //   },
})

module.exports = mongoose.models.Book || mongoose.model('Book', BookSchema)
