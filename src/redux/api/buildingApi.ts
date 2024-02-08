import { tagTypes } from "@/redux/tag-types";
import { IBuilding, IMeta } from "@/types";
import { baseApi } from "./baseApi";

const BUILDING_URL = "/buildings";

export const buildingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all academic departments api endpoint
    buildings: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BUILDING_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IBuilding[], meta: IMeta) => {
        return {
          buildings: response,
          meta,
        };
      },
      providesTags: [tagTypes.building],
    }),
    // get single academic department by id api endpoint
    building: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BUILDING_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.building],
    }),
    // create academic department api endpoint
    addBuilding: build.mutation({
      query: (data) => ({
        url: BUILDING_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.building],
    }),
    // update academic department api endpoint
    updateBuilding: build.mutation({
      query: (data) => ({
        url: `${BUILDING_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.building],
    }),
    // delete academic department api endpoint
    deleteBuilding: build.mutation({
      query: (id) => ({
        url: `${BUILDING_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.building],
    }),
  }),
});

export const {
  useAddBuildingMutation, // create ac building hook
  useBuildingsQuery, // get all buildings hook
  useBuildingQuery, // get single building hook
  useUpdateBuildingMutation, // update building hook
  useDeleteBuildingMutation, // delete existing building hook
} = buildingApi;
