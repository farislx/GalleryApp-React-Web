import { showLoader, hideLoader } from '../utils';
import dashboard from '../pages/dashboard';

module.exports = {
    path: "dashboard",
    component: dashboard,
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require("../pages/dashboard")
            })
        })
    },
    getChildRoutes(partialNextState, callback) {
        callback(null, [])
    }
}