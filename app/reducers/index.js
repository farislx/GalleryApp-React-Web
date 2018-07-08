import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import dashboard from './dashboard';

module.exports = () => {
    return combineReducers({
        'routing': routerReducer,
        'auth': auth,
        'dashboard': dashboard,
    })
} 