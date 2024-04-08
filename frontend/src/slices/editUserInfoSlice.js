import { createSlice } from '@reduxjs/toolkit'

export const editUserInfoSlice = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		updateuserName: (currentState, action) => {
			const user = { ...currentState, userName: action.payload }
			return user
		},
		updateUser: (currentState, action) => {
			return action.payload
		},
	},
})
