import type { Document, Model } from 'mongoose';
import type { IRoleDoc } from '@models/role/types';
import type { IUserDoc } from '@models/user/types';
import type { ID } from '@typs/model.objectid';

export interface IBlacklistedUser {
  _id: ID<IUserDoc>;
  name: string;
  email: string;
  blacklisted_from: Date;
  role: ID<IRoleDoc>;
  flagged_by: ID<IUserDoc>;
}

export interface IBlacklistedUserDoc extends IBlacklistedUser, Document {}

export interface IBlacklistedUserModel extends Model<IBlacklistedUserDoc> {
  createBlacklistedUser: (
    this: IBlacklistedUserModel,
    doc: IBlacklistedUser,
  ) => Promise<IBlacklistedUserDoc>;
}
