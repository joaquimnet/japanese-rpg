import { Schema } from 'mongoose';

const schema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    meta: {
      jisho: {
        type: Schema.Types.Mixed,
        default: null,
      },
      wanikani: {
        type: Schema.Types.Mixed,
        default: null,
      },
    },
  },
  { timestamps: true },
);

export default schema;
