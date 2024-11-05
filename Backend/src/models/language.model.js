import mongoose, { Schema } from 'mongoose';
const languageColors = Object.freeze({
  RUBY_RED: '#CC342D',
  PYTHON_YELLOW: '#FFD43B',
  JAVA_BROWN: '#B07219',
  CPP_BLUE: '#00599C',
  PHP_PURPLE: '#8892BF',
  JAVASCRIPT_GOLD: '#F7DF1E',
  C_SHARP_VIOLET: '#178600',
  SWIFT_ORANGE: '#FFAC45',
  KOTLIN_BLUE: '#3D76A1',
  GO_TEAL: '#00ADD8',
  HTML_ORANGE: '#E34F26',
  CSS_BLUE: '#264DE4',
  SASS_PINK: '#CC6699',
  TYPESCRIPT_LIGHT_BLUE: '#3178C6',
  RUST_RED: '#CB0000',
  SCALA_GREEN: '#DC322F',
  PERL_BLUE: '#0298C3',
  DART_YELLOW: '#00BFFF',
  OBJECTIVE_C_GRAY: '#A4B6A7',
  COLD_FUSION_BLUE: '#0063B1',
});

const languageSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  color: {
    type: String,
    enum: Object.values(languageColors),
    required: true,
    default: languageColors.JAVASCRIPT_GOLD,
  },
  description: {
    type: String,
    max: 100,
    trim: true,
  },
});

export const Language = mongoose.model('Language', languageSchema);
