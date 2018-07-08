import { take, call, put, select,fork } from 'redux-saga/effects';
import { List } from 'immutable';
import Promise from 'bluebird';
import { bindInputChange } from '../../utils/sagaInputChange';
import ConstantBuilder from '../../utils/constantCreator';
import ActionBuilder from '../../utils/actionCreator';
import { dispatch } from '../../utils/reduxStore';
import { toastSuccess, toastWarinig, showLoader, hideLoader, formatDate, logMessage } from '../../utils';
import Auth from '../../utils/auth';
import { hashHistory } from 'react-router';
import { httpRequest, request } from '../../utils/request';
import { serviceBase } from '../../utils/config';
import { Map } from 'immutable';
import {getShots,filterShots} from '../../service/dashboard/shots'
const getStateData = (state) => Map(state.dashboard.home);

export function* initGaleryApp() {

    while (true) {

        while (true) {

            const { name, value } = yield take(ConstantBuilder("DASHBOARD", "INIT"));
    
            try {
    
                let formData = yield select(getStateData);
                let callbacks = getCallbacks(formData, name, value);
                bindInputChange(callbacks, name, value, false).then((state) => {
    
                dispatch(ActionBuilder("DASHBOARD", "SET_FORM", { 'data': state }));
    
                });
            }
            catch (e) {
    
                logMessage(e);
            }
        }
    }
}

function getCallbacks(formData, name, value) {

    switch (name) {

        case "init":
        debugger;
            return [getShots()];
        case "search":
            let title=formData.get("title");
            let description=formData.get("description");
            let shotList=formData.get("shotList").toArray();
            return [filterShots(shotList,title,description)];
        
    }
}

export default function* sagas() {
	yield [
		fork(initGaleryApp)
	]
}