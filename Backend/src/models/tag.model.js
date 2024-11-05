import mongoose, { Schema } from 'mongoose';

const TagColors = Object.freeze({
  VIVID_BLUE: '#007BFF',
  SOFT_PURPLE: '#6F42C1',
  BRIGHT_GREEN: '#28A745',
  AMBER_YELLOW: '#FFC107',
  CORAL_RED: '#FF6B6B',
  TEAL: '#20C997',
  SLATE_GRAY: '#6C757D',
  INDIGO: '#6610F2',
  SOFT_PINK: '#E83E8C',
  ORANGE: '#FD7E14',
});

const tagSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  color: {
    type: String,
    enum: Object.values(TagColors),
    required: true,
    default: TagColors.VIVID_BLUE,
  },
  description: {
    type: String,
    max: 100,
    trim: true,
  },
});

export const Tag = mongoose.model('Tag', tagSchema);
