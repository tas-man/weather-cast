const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
  city: { type: String, unique: true, required: true },
  data: { type: Schema.Types.Mixed, required: true },
  timestamp: { type: Number, required: true },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('FiveDay', schema);