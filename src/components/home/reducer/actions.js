import { REGISTER_USER } from './constants';

export const registerUser = (name, password) => ({
  type: REGISTER_USER,
  payload : {name, password}
});