import { createStore ,Store} from 'redux';
import rootReducer from './reducers/index';

const StoreConfig:Store = createStore(
  rootReducer, 
);
  
  export default StoreConfig;