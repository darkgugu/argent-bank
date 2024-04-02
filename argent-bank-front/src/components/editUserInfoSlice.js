import { createSlice } from '@reduxjs/toolkit'

export const editUserInfoSlice = createSlice({
	name: 'user',
	initialState: { user: {} },
	reducers: {
		updateUsername: (currentState, action) => {
			const user = { ...currentState.user, username: action.payload }
			return { ...currentState, user }
		},
	},
})
