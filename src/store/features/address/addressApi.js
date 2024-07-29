import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const addressApi = createApi({
    reducerPath: 'addressApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_LINK }),
    endpoints: (builder) => ({
        getAddressBySearchParams: builder.query({
            query: (params) => ({ url: `Address/q?UserId=${params.userId}&Page=${params.page}&Limit=${params.limit}`, method: "GET" }),
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetAddressBySearchParamsQuery 
} = addressApi