import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter: authReducer,
  project: projectReducer
})
export default rootReducer