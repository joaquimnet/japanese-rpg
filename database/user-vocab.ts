import { Schema } from 'mongoose';

const schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    vocab: {
      type: String,
      ref: 'Vocab',
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
