import createConstant from './constantCreator';

export default function actionCreator(moduleName, actionName, payLoad) {

    return {
        type: createConstant(moduleName, actionName),
        ...payLoad
    }
}