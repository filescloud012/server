/**
 * @file Policy Definition File
 * @description All the Policies Related to Users
 * @module - User
 * @author Sudharshan TK
 */

import add, { map as addMap } from './add';
import remove, { map as rmMap } from './remove';
import modify, { map as modMap } from './modify';
import blacklist, { map as blistMap } from './blacklist';

export default { add, remove, modify, blacklist };

export const map = [...addMap, ...rmMap, ...blistMap, ...modMap];
