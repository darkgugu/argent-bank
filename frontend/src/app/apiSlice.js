import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const backendUrl = 'http://localhost:3001/api/v1/'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: backendUrl }),
	prepareHeaders: (headers, { getState }) => {
		const token = getState().token

		if (token) {
			headers.set('authorization', `Bearer ${token}`)
		}

		return headers
	},
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => ({ url: 'user/login', method: 'POST', body }),
		}),
		getProfile: builder.mutation({
			query: (body) => ({ url: 'user/profile', method: 'POST', body }),
		}),
	}),
})

export const { useLoginMutation, useGetProfileMutation } = apiSlice
