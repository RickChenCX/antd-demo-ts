import { createStore ,Store, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga"

const sagaMiddleware = createSagaMiddleware()

const StoreConfig:Store = createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware)  // 中间件，加载sagaMiddleware
);
sagaMiddleware.run(rootSaga)                        // 执行rootSaga

export default StoreConfig;
