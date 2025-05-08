import { apiSlice } from "./ApiSlice";

const branchApi=apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        branch: builder.query({
            query: () => '/api/Company/Get_branch_all',
        }),
    })
})

export const {useLazyBranchQuery} = branchApi;