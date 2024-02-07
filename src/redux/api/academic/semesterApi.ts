import { tagTypes } from "@/redux/tag-types";
import { IAcademicSemester, IMeta } from "@/types";
import { baseApi } from "../baseApi";

const ACADEMIC_SEMESTER_URL = "/academic-semesters";

export const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all academic semesters api endpoint
    academicSemesters: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ACADEMIC_SEMESTER_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAcademicSemester[], meta: IMeta) => {
        return {
          academicSemesters: response,
          meta,
        };
      },
      providesTags: [tagTypes.academicSemester],
    }),
    // get single academic semester by id api endpoint
    academicSemester: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.academicSemester],
    }),
    // create academic semester api endpoint
    addAcademicSemester: build.mutation({
      query: (data) => ({
        url: ACADEMIC_SEMESTER_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.academicSemester],
    }),
    // update academic semester api endpoint
    updateAcademicSemester: build.mutation({
      query: (data) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.academicSemester],
    }),
    // delete academic semester api endpoint
    deleteAcademicSemester: build.mutation({
      query: (id) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.academicSemester],
    }),
  }),
});

export const {
  useAddAcademicSemesterMutation, // create ac semester hook
  useAcademicSemestersQuery, // get all semesters hook
  useAcademicSemesterQuery, // get single semester hook
  useUpdateAcademicSemesterMutation, // update existing semester hook
  useDeleteAcademicSemesterMutation, // delete existing semester hook
} = academicSemesterApi;
