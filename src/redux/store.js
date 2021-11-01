import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { rootReducer } from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleWare = createSagaMiddleware();

const middlewareList = [sagaMiddleWare, logger];

export const storeInstance = createStore(
    rootReducer, applyMiddleware(...middlewareList)
);

sagaMiddleWare.run(rootSaga);