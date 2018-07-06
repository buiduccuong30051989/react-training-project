import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import reducer from './../reducers';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    reducer,
    enhancer
)

// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

sagaMiddleware.run(sagas);

export default store;
