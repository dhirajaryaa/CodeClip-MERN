import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      index: true,
    },
    fullName: {
      type: String,
      required: true,
      index: true,
    },
    emailId: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    coverImg: {
      type: String,
    },
    status: {
      type: String,
    },
    rank: {
      type: Number,
      default: 0,
    },
    knowLanguage: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Language',
      },
    ],
  },
  { timestamps: true }
);

// password plain text to hash convert
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// custom methods for password checking
userSchema.method.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(this.password, password);
};



export const User = mongoose.model('User', userSchema);
