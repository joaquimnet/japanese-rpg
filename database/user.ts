import { Schema } from 'mongoose';

const schema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    discordId: {
      type: String,
      required: true,
    },
    gold: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true },
);

export default schema;
