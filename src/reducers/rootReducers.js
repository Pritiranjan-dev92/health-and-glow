import { combineReducers } from 'redux';
import utillReducers from './utillReducers';
const rootReducer = combineReducers({
    utill:utillReducers
});
export default rootReducer;