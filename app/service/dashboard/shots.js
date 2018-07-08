import Promise from 'bluebird';
import { List } from 'immutable';
import request from '../../utils/request';

export function getShots() {

    return new Promise((resolve, reject) => {

        request("shots?access_token=363804be630a4ae4fec2d66c6071c8ea92fd336ca671d8030781f897534d348a", {
            method: "GET"
        }).then((response) => {

            let shots = [];

            response.data.Server.Data.forEach((item) => {

                shots.push(item);

            })

            resolve({ 'shotList': List(shots) })
        });
    })
}

