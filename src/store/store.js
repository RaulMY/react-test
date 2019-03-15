import { applyMiddleware, createStore } from 'redux';   
import users from '../data/users.json'
import rootReducer from '../reducers/index';


const initialUser = users;


const store = createStore(rootReducer);

export default store;