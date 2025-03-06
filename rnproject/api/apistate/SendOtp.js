import { apiSlice } from "./ApiSlice";

const SendOtp = apiSlice.injectEndpoints({
    endpoints : builder => ({
        sendOtp: builder.mutation({
            query: email => ({
                url: `/api/User/sendOtp?email=${email}`,
                method: 'POST',
            })
        }),
    }),

})

export const { useSendOtpMutation } = SendOtp;