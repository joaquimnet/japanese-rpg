import { Schema } from 'mongoose';

const schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    kana: {
      type: String,
      ref: 'Kana',
      required: true,
    },
    type: {
      type: String,
      enum: ['katakana', 'hiragana'],
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
    nextUpgradeDate: {
      type: Date,
      required: true,
      default: new Date('1970-01-01'),
    },
  },
  { timestamps: true },
);

export default schema;
