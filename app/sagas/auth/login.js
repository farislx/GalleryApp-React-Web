import { take, call, put, select } from 'redux-saga/effects';
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

const getStateData = (state) => state.auth.login.get("data").toObject();

export function* submitLogin() {

    while (true) {

        yield take(ConstantBuilder("AUTH", "LOGIN_SUBMIT"));

        showLoader();
      
                hideLoader();
                hashHistory.push("/dashboard")
         
    }
}

function getCallbacks(formData, name, value) {

    switch (name) {

        case "init":

            return [];
    }
}