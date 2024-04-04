import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { editUserInfoSlice } from '../slices/editUserInfoSlice'
import { signInSlice } from '../slices/signInSlice'
import { apiSlice } from './apiSlice'

let state = {
	user: {
		username: 'Steve Peggy',
		name: '',
		email: '',
		id: '',
	},
	token: '',
}

export const store = configureStore({
	preloadedState: state,
	reducer: combineReducers({
		user: editUserInfoSlice.reducer,
		token: signInSlice.reducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	}),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
})
