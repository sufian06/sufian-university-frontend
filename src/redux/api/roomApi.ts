import { tagTypes } from "@/redux/tag-types";
import { IMeta, IRoom } from "@/types";
import { baseApi } from "./baseApi";

const ROOM_URL = "/rooms";

export const roomApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all rooms api endpoint
    rooms: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ROOM_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IRoom[], meta: IMeta) => {
        return {
          rooms: response,
          meta,
        };
      },
      providesTags: [tagTypes.room],
    }),
    // get single room by id api endpoint
    room: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ROOM_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.room],
    }),
    // create room api endpoint
    addRoom: build.mutation({
      query: (data) => ({
        url: ROOM_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.room],
    }),
    // update room api endpoint
    updateRoom: build.mutation({
      query: (data) => ({
        url: `${ROOM_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.room],
    }),
    // delete room api endpoint
    deleteRoom: build.mutation({
      query: (id) => ({
        url: `${ROOM_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.room],
    }),
  }),
});

export const {
  useAddRoomMutation, // create room hook
  useRoomsQuery, // get all rooms hook
  useRoomQuery, // get single room hook
  useUpdateRoomMutation, // update room hook
  useDeleteRoomMutation, // delete existing room hook
} = roomApi;
