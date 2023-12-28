import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/slices/authSlice';
import companyReducer from './redux/slices/companyCreateSlice';
import { authApi } from './redux/RTKQueries/authQuery';
import { createCompanyApi } from './redux/RTKQueries/createCompanyQuery';

import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
	reducer: {
		authReducer,
		companyReducer,
		[authApi.reducerPath]: authApi.reducer,
		[createCompanyApi.reducerPath]: createCompanyApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			authApi.middleware,
			createCompanyApi.middleware,
		),
});

setupListeners(store.dispatch);

export default store;
