import type { Document, Model } from 'mongoose';
import type { ISMTPProviderDoc } from '@models/smtp-provider/types';
import type { ID } from '@typs/model.objectid';
import type { IInlineResponse } from '@typs/inline.response';

export interface ISMTPMailer {
  _id: string;
  name: string;
  email: string;
  password: string;
  type: string & ('gmail' | 'others');
  provider: ID<ISMTPProviderDoc>;
  gmail_data?: Record<string, string | number | boolean>;
}

export interface ISMTPMailerDoc extends ISMTPMailer, Document {}

export interface ISMTPMailerModel extends Model<ISMTPMailerDoc> {
  createDoc: (this: ISMTPMailerModel) => Promise<ISMTPMailerDoc[]>;
  clearAll: (this: ISMTPMailerModel) => Promise<IInlineResponse<string>>;
}