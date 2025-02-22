import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: "users",
                method: "GET"
            }),
        }),

        postUser: builder.mutation({
            query: (data) => ({
                url: "users",
                method: "POST",
                body: data,
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, usePostUserMutation } = usersApi