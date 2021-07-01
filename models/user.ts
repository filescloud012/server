import { Schema, model } from 'mongoose';
import { user as UserType } from '../types/models';

const UserSchema = new Schema<UserType>({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    lowercase: true,
  },
  registered_at: {
    type: Number,
    required: true,
    default: Date.now,
  },
  verified_at: {
    type: Date,
    required: true,
  },
  scopes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Scope',
    },
  ],
  token_hash: {
    type: String,
    required: true,
  },
  restricted: {
    type: Boolean,
    default: false,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Role',
    required: true,
  },
  password: {
    type: String,
    default: null,
  },
  allowed_policies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Policy',
    },
  ],
  disallowed_policies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Policy',
    },
  ],
});

const User = model('User', UserSchema);

export default User;