import { Schema } from 'mongoose';

const schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    kanji: {
      type: String,
      ref: 'Kanji',
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
