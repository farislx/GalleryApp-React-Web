import { fromJS, List } from 'immutable';
import constantCreator from '../.././utils/constantCreator';
import { buildNewState } from '../../utils/reducer';
import { LOCATION_CHANGE } from 'react-router-redux';

var initialState =fromJS({
    'tempShotList': List([]),
    'shotList': List(),
    'title':'',
    'description':''
});

export default function homeReducer(state = initialState, action) {

    const SET_FORM = constantCreator("DASHBOARD", "SET_FORM");

    switch (action.type) {

        case SET_FORM:
        
            return buildNewState(state, action.data); 

        case LOCATION_CHANGE:

            return initialState;

        default:
        
            return state;
    }
}