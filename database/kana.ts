import { Schema } from 'mongoose';

const schema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    jp: {
      type: String,
      required: true,
    },
    romaji: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['katakana', 'hiragana'],
      required: true,
    },
  },
  { timestamps: true },
);

export default schema;
