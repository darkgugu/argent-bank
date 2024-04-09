import { createSlice } from '@reduxjs/toolkit'

export const signInSlice = createSlice({
	name: 'token',
	initialState: {},
	reducers: {
		setToken: (currentState, action) => {
			return action.payload
		},
		clearToken: (currentState, action) => {
			return ''
		},
	},
})
