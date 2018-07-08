import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';

module.exports = () => {
    return combineReducers({
        'routing': routerReducer,
        'auth': auth,
    })
} 