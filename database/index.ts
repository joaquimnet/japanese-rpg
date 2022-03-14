import mongoose from 'mongoose';

import KanaSchema from './kana';
import KanjiSchema from './kanji';
import VocabSchema from './vocab';
import UserKanaSchema from './user-kana';
import UserKanjiSchema from './user-kanji';
import UserVocabSchema from './user-vocab';
import UserSchema from './user';

const MONGODB_URI = process.env.MONGODB_URI;

export const connect = async () => {
  const conn = await mongoose.connect(MONGODB_URI).catch((err) => console.log(err));
  console.log('Mongoose Connection Established');

  // Models
  const Kana = mongoose.models.Kana || mongoose.model('Kana', KanaSchema);
  const Kanji = mongoose.models.Kanji || mongoose.model('Kanji', KanjiSchema);
  const Vocab = mongoose.models.Vocab || mongoose.model('Vocab', VocabSchema);
  const UserKana = mongoose.models.UserKana || mongoose.model('UserKana', UserKanaSchema);
  const UserKanji = mongoose.models.UserKanji || mongoose.model('UserKanji', UserKanjiSchema);
  const UserVocab = mongoose.models.UserVocab || mongoose.model('UserVocab', UserVocabSchema);
  const User = mongoose.models.User || mongoose.model('User', UserSchema);

  return { conn, Kana, Kanji, Vocab, UserKana, UserKanji, UserVocab, User };
};
