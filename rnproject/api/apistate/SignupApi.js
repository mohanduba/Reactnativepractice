import { apiSlice } from "./ApiSlice";

export const signupApi=apiSlice.injectEndpoints({
    endpoints:builder=>({
        signup:builder.mutation({
            query:(credentials)=>({
                url:'/api/User/Signup',
                method:'POST',
                body:{...credentials}
            })
        })
    })
})

export const {useSignupMutation}=signupApi;