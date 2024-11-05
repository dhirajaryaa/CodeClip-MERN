import mongoose, { Schema } from 'mongoose';

const snippetSchema = new Schema(
  {
    title: {
      type: String,
      requited: true,
      trim: true,
      index: true,
    },
    description: {
      type: String,
      trim: true,
      max: 360,
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'tags',
        index: true,
      },
    ],
    isPublic: {
      type: Boolean,
      default: false,
      index: true,
      requited: true,
    },
    language: [
      {
        type: Schema.Types.ObjectId,
        ref: 'language',
        required: true,
      },
    ],
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    bannerImg: String, //cloudinary url
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true }
);

export const Snippet = mongoose.model('Snippet', snippetSchema);
