import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { editUserInfoSlice } from '../slices/editUserInfoSlice'

let state = {
	user: {
		username: 'Steve Peggy',
		name: '',
		email: '',
	},
	token: '',
}

export const store = configureStore({
	preloadedState: state,
	reducer: combineReducers({
		user: editUserInfoSlice.reducer,
	}),
})
