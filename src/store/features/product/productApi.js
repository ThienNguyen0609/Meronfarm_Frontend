import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_LINK }),
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => ({ url: 'Product', method: "GET" }),
        }),
        getProductById: builder.query({
            query: (productId) => ({ url: `Product/${productId}`, method: "GET" }),
        }),
        getProductByCategoryId: builder.query({
            query: (categoryId) => ({ url: `Product/category/${categoryId}`, method: "GET" }),
        }),
        getProductBySearchParams: builder.query({
            query: (params) => ({ url: `Product/q?${params.search !== 0 ? `SearchString=${params.search}&` : ""}CategoryId=${params.categoryId}&Page=${params.page}&Sort=${params.sort}&Stock=${params.stock}`, method: "GET" }),
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetAllProductQuery, 
    useGetProductByIdQuery, 
    useGetProductByCategoryIdQuery, 
    useGetProductBySearchParamsQuery 
} = productApi