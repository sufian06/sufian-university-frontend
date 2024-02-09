import { tagTypes } from "@/redux/tag-types";
import { ICourse, IMeta } from "@/types";
import { baseApi } from "./baseApi";

const COURSE_URL = "/courses";

export const courseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all courses api endpoint
    courses: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: COURSE_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: ICourse[], meta: IMeta) => {
        return {
          courses: response,
          meta,
        };
      },
      providesTags: [tagTypes.course],
    }),
    // get single course by id api endpoint
    course: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${COURSE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.course],
    }),
    // create course api endpoint
    addCourse: build.mutation({
      query: (data) => ({
        url: COURSE_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.course],
    }),
    // update course api endpoint
    updateCourse: build.mutation({
      query: (data) => ({
        url: `${COURSE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.course],
    }),
    // delete course api endpoint
    deleteCourse: build.mutation({
      query: (id) => ({
        url: `${COURSE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.course],
    }),
  }),
});

export const {
  useAddCourseMutation, // create course hook
  useCoursesQuery, // get all courses hook
  useCourseQuery, // get single course hook
  useUpdateCourseMutation, // update course hook
  useDeleteCourseMutation, // delete existing course hook
} = courseApi;
