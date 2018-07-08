import App from '../components/app';
import dashboard from '../pages/dashboard';

export default [{
    path: "/",
    component: App,
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('../pages/landingPage'),
            })
        })
    },
    getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, [
                require("./dashboard"),
            ])
        })
    },
}, {
    path: "/notauthorized",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('../pages/common/NotAuthroized'))
        })
    }
}, {
    path: "*",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('../pages/common/NotFound'))
        })
    }
}]