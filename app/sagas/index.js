import { fork } from 'redux-saga/effects';
import auth from './auth';
import dashboard from './dashboard';

export default function* root() {
    
    yield [
        fork(auth),
        fork(dashboard)
    ]
} 