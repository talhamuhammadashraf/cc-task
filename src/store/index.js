import {
    createStore,
    applyMiddleware,
  } from 'redux';
  import thunk from 'redux-thunk'
  import logger from 'redux-logger'
  import {
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';
  import appReducer from './reducers'
  
  const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
  );
  

const store = createStore(
    appReducer,
    applyMiddleware(middleware,thunk,logger),
  );
  
  export default store