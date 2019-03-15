import users from '../data/users.json';
import { SUBMIT_INFO } from '../actions/types';

const initialState = users;

export default function(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_INFO:
          return state.concat(action.newUser)
        default:
          return state;
      }
}