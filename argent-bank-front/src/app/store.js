import {
	combineReducers,
	configureStore,
	createAction,
	createReducer,
} from '@reduxjs/toolkit'
import { editUserInfoSlice } from '../components/editUserInfoSlice'

let state = {
	user: {
		username: 'Steve Peggy',
		name: '',
		email: '',
	},
	token: '',
}

export const updateUsername = createAction('UPDATE_USERNAME', (username) => {
	return {
		payload: username,
	}
})

const reducer = createReducer(state, function (builder) {
	builder.addCase(updateUsername, (currentState, action) => {
		const user = { ...currentState.user, username: action.payload }
		return { ...currentState, user }
	})
})

export const store = configureStore({
	preloadedState: state,
	reducer,
})
