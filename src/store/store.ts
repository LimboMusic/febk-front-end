import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
// import { apiSlice } from './slice';
import { middleware } from './middleware';
// import { meetingCopilotSlice } from './slice/apiSlice/root';
import { loadState, saveState } from './sessionStorage';

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(middleware),
      // .concat(apiSlice.middleware)
      // .concat(meetingCopilotSlice.middleware),
  devTools: true,
  preloadedState: persistedState
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

export type AppDispatch = typeof store.dispatch;
export { useSelector, useDispatch } from 'react-redux';
