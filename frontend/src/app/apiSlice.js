import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const backendUrl = 'http://localhost:3001/api/v1/'

const getToken = (state) => state?.token

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: backendUrl,
		prepareHeaders: (headers, { getState }) => {
			const token = getToken(getState())

			if (token) {
				headers.set('authorization', `Bearer ${token}`)
			} else {
				console.log('ERROR no token')
			}

			return headers
		},
	}),
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => ({ url: 'user/login', method: 'POST', body }),
		}),
		getProfile: builder.mutation({
			query: (body) => ({
				url: 'user/profile',
				method: 'POST',
				body,
			}),
		}),
		updateUsername: builder.mutation({
			query: (body) => ({
				url: 'user/profile',
				method: 'PUT',
				body,
			}),
		}),
	}),
})

export const {
	useLoginMutation,
	useGetProfileMutation,
	useUpdateUsernameMutation,
} = apiSlice
