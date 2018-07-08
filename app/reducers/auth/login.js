import { fromJS, List } from 'immutable';
import constantCreator from '../.././utils/constantCreator';
import { buildNewState } from '../../utils/reducer';
import { LOCATION_CHANGE } from 'react-router-redux';

var initialState = fromJS({
    'data': {
       'showForgotPassword': false
    }
});

export default function loginReducer(state = initialState, action) {

    const SET_FORM = constantCreator("AUTH", "LOGIN_SET_FORM");
    const CLEAR_FORM = constantCreator("AUTH", "FORGOT_PASSWORD_CLEAR_FORM");

    switch (action.type) {

        case SET_FORM:

            return state.set("data", buildNewState(state.get('data'), action.data));

        case CLEAR_FORM:

            return state.set("data", state.get("data").set("ForgotUserName", null).set("ForgotMobileNumber", null).set("showForgotPassword", false))

        case LOCATION_CHANGE:

            return initialState;

        default:
        
            return state;
    }
}