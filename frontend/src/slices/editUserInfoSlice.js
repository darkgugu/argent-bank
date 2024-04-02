import { createSlice } from '@reduxjs/toolkit'

export const editUserInfoSlice = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		updateUsername: (currentState, action) => {
			const user = { ...currentState, username: action.payload }
			return user
		},
	},
})
