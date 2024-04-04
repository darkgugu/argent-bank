import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const backendUrl = 'http://localhost:3001/api/v1/'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: backendUrl }),
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => ({ url: 'user/login', method: 'POST', body }),
		}),
	}),
})

export const { useLoginMutation } = apiSlice
