import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const meronfarmApi = createApi({
    reducerPath: 'meronfarmApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_LINK }),
    endpoints: (builder) => ({
        getAddressBySearchParams: builder.query({
            query: (params) => ({ url: `Address/q?UserId=${params.userId}&Page=${params.page}&Limit=${params.limit}`, method: "GET" }),
        }),
        getAddressesByUserId: builder.query({
            query: (userId) => ({ url: `Address/${userId}`, method: "GET" }),
        }),
        getFavouriteBySearchParams: builder.query({
            query: (params) => ({ url: `Favourite/q?UserId=${params.userId}&Page=${params.page}&Limit=${params.limit}`, method: "GET" }),
        }),
        getProductViewedBySearchParams: builder.query({
            query: (params) => ({ url: `Viewed/q?UserId=${params.userId}&Page=${params.page}&Limit=${params.limit}`, method: "GET" }),
        }),
        getOrderBySearchParams: builder.query({
            query: (params) => ({ url: `Order/q?UserId=${params.userId}&OrderStatus=${params.orderStatus}&Page=${params.page}&Limit=${params.limit}`, method: "GET" }),
        }),
        getUsersBySearchParams: builder.query({
            query: (params) => ({ url: `User/q?${params.search !== 0 ? `SearchString=${params.search}&` : ""}Page=${params.page}&Limit=${params.limit}`, method: "GET" }),
        }),
        getOrdersBySearchParams: builder.query({
            query: (params) => ({ url: `Order/q1?${params.search !== 0 ? `SearchString=${params.search}&` : ""}Page=${params.page}&Limit=${params.limit}`, method: "GET" }),
        }),
        getOrderStatus: builder.query({
            query: () => ({ url: `OrderStatus`, method: "GET" }),
        }),
        getNotificationsBySearchParams: builder.query({
            query: (params) => ({ url: `Notification/q?UserId=${params.userId}&Page=${params.page}&Limit=${params.limit}`, method: "GET" }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetAddressBySearchParamsQuery,
    useGetAddressesByUserIdQuery,
    useGetFavouriteBySearchParamsQuery,
    useGetProductViewedBySearchParamsQuery,
    useGetOrderBySearchParamsQuery,
    useGetUsersBySearchParamsQuery,
    useGetOrdersBySearchParamsQuery,
    useGetOrderStatusQuery,
    useGetNotificationsBySearchParamsQuery
} = meronfarmApi