import Promise from 'bluebird';
import { List } from 'immutable';
import request from '../../utils/request';

export function getShots() {

    return new Promise((resolve, reject) => {

        request("shots?access_token=363804be630a4ae4fec2d66c6071c8ea92fd336ca671d8030781f897534d348a", {
            method: "GET"
        }).then((response) => {

            let shots = [];

            response.data.forEach((item) => {

                shots.push(
                    {
                        'title':item.title,
                        'description':item.description,
                        'imageUrl':item.images.normal
                    }
                );

            })

            resolve({ 'shotList': List(shots) ,'tempShotList':List(shots)})
        });
    })
}

export function filterShots(shotList,title,description) {

    return new Promise((resolve, reject) => {

		    let items = _.filter(shotList, (i) => { return (title == null || title.trim() == ''||(i.title!==null && i.title.toLowerCase().indexOf(title.trim().toLowerCase()) !== -1)
           ) && (description == null || description.trim() == ''||(i.description!==null && i.description.toLowerCase().indexOf(description.trim().toLowerCase() )!==-1))});


            let shots = [];

            items.forEach((item) => {

                shots.push(
                    {
                        'title':item.title,
                        'description':item.description,
                        'imageUrl':item.imageUrl
                    }
                );

            })

            resolve({'tempShotList':List(shots)})
        });
    
}

