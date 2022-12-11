import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const ApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    endpoints:(builder)=> ({
        getOneUser: builder.query({
            query: ()=> '/api/v1/users',
        })
    })
})
export const {
    useGetOneUserQuery
} = ApiSlice