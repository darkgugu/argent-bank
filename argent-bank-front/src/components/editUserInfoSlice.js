import { createSlice } from '@reduxjs/toolkit'

export const editUserInfoSlice = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		updateUsername: (currentState, action) => {
			const user = { ...currentState, username: action.payload }
			console.log('...currentState :', { ...currentState })
			console.log('...currentState.user :', { ...currentState.user })
			console.log('user :', user)
			return user
		},
	},
})
