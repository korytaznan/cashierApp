import { applyMiddleware, compose, legacy_createStore } from 'redux';
import { reducers } from './reducers';
import { rootSaga } from './sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware<RootState>();
const middleware = [sagaMiddleware];

const enhancer = compose(applyMiddleware(...middleware));

export const store = legacy_createStore(reducers, enhancer);
export type RootState = ReturnType<typeof reducers>;

sagaMiddleware.run(rootSaga);
