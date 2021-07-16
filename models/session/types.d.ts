import type { Document, Model } from 'mongoose';
import type { IUserDoc } from '@models/user/types';
import type { IFrontendDoc } from '@models/frontend/types';
import type { ID } from '@typs/model.objectid';
import type { IInlineResponse } from '@typs/inline.response';

export interface ISession {
  _id: string;
  ip: string;
  user_id: ID<IUserDoc>;
  frontend: ID<IFrontendDoc>;
  token_secret: string;
  issued_at: Date;
}

export interface ISessionDoc extends ISession, Document {}

export interface ISessionModel extends Model<ISessionDoc> {
  createDoc: (this: ISessionModel) => Promise<ISessionDoc[]>;
  clearAll: (this: ISessionModel) => Promise<IInlineResponse<string>>;
}