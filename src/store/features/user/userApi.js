import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_LINK }),
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => ({ url: 'User', method: "GET" }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetAllProductQuery, 
} = userApi