import { createStore,applyMiddleware,compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducers from "../reducers/rootReducers";
import rootSaga from "../sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composeEnhancers =
	process.env.NODE_ENV == 'development' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);
const store = createStore(rootReducers,enhancer);
sagaMiddleware.run(rootSaga);

export default store;
