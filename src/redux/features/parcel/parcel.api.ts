import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createParcel: builder.mutation({
      query: (data) => ({
        url: "/parcel/create",
        method: "POST",
        data,
      }),
      invalidatesTags: ["PARCEL"],
    }),
    getAllParcels: builder.query({
      query: () => ({
        url: "/parcel",
        method: "GET",
      }),
      providesTags: ["PARCEL"],
    }),
  }),
});

export const { useCreateParcelMutation, useGetAllParcelsQuery } = authApi;
