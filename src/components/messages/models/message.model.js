const { Schema, model } = require('mongoose');

const MessageSchema = Schema({
  of: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

MessageSchema.method('toJSON', function() {
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = model('Message', MessageSchema);
