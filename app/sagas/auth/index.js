import { fork } from 'redux-saga/effects';
import {  submitLogin } from './login';

export default function* root() {
    
    yield [
        fork(submitLogin)
    ]
} 