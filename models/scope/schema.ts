import { Schema } from 'mongoose';
import type { IScope, IScopeModel } from './types';

export default new Schema<IScope, IScopeModel>({
  _id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  added_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  drive_id: {
    type: String,
    required: true,
    unique: true,
  },
  disallowed_frontends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Frontend',
    },
  ],
  related_to: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Credential',
    },
  ],
});
