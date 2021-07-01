import Policy from './policy';

export default interface role {
  _id: string;
  name: string;
  alias: string;
  delgates_from: this['_id'] | null;
  max_sessions: number;
  allowed_policies: Policy['_id'][];
  disallowed_policies: Policy['_id'][];
}