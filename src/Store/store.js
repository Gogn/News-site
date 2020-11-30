import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Store/Reducers/rootReducer';

export default configureStore({
  reducer: {
    root: rootReducer,
  },
});
