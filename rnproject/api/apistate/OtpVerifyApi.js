import { apiSlice } from "./ApiSlice";

const SignupVerifyOtpApiSlice = apiSlice.injectEndpoints({
    endpoints : builder => ({
        SignupVerifyotp : builder.mutation({
            query : (credentials) => ({
                url : '/api/User/VerifyOtp',
                method : 'POST',
                body: {...credentials}
            })
        })
    })
})

export const { useSignupVerifyotpMutation } = SignupVerifyOtpApiSlice;