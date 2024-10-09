import { combineReducers } from '@reduxjs/toolkit';
// import { appSlice, apiSlice, interviewSlice, headerSlice, userSlice, copilotSlice, localeSlice,menuSlice } from './slice';
// import { meetingCopilotSlice } from './slice/apiSlice/root';
import { menuSlice, localeSlice } from './slice';

const rootReducer = combineReducers({
  // app: appSlice.reducer,
  // interview: interviewSlice.reducer,
  // header: headerSlice.reducer,
  // user: userSlice.reducer,
  // copilot: copilotSlice.reducer,
  locale: localeSlice.reducer,
  menuSlice: menuSlice.reducer,
  // [apiSlice.reducerPath]: apiSlice.reducer,
  // [meetingCopilotSlice.reducerPath]: meetingCopilotSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;