import { combineReducers } from 'redux';
import { demoReducer } from './demoReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    demoReducer,
    form: formReducer
})

export default rootReducer;