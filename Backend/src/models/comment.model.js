import mongoose, { Schema } from 'mongoose';

const commentSchema = new Schema(
  {
    snippetId: {
      type: Schema.Types.ObjectId,
      ref: 'Snippet',
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model('Comment', commentSchema);
