import { apiSlice } from "./ApiSlice";

const loginApi=apiSlice.injectEndpoints({
    endpoints:builder=>({
        login:builder.mutation({
            query:credentials=>({
                url: '/api/User/Signin',
                method:'POST',
                body:{...credentials}
            })
        })
    })
})

export const {useLoginMutation} = loginApi;