import counterReducer from '../counter/reducers';
 import loggedReducer from '../isLogged/reducers';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter : counterReducer,
    isLogged : loggedReducer
});

export default allReducers;