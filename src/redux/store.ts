import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import reducer from './rootReducer';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { Middleware } from 'redux';

const middlewareList: Middleware[] = [ReduxThunk];
if (process.env.NODE_ENV === 'development') {
  middlewareList.push(logger);
}

const middleware = new MiddlewareArray().concat(...middlewareList);
const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV == 'test',
});
// useSelector 사용시 타입으로 사용하기 위함
export type RootState = ReturnType<typeof store.getState>;
// useDispatch를 좀 더 명확하게 사용하기 위함
export type AppDispatch = typeof store.dispatch;
export default store;
