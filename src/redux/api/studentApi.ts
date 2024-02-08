import { IMeta, IStudent } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BASE_STUDENT_API_URL = "/students";

export const studentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all students endpoint
    students: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BASE_STUDENT_API_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IStudent[], meta: IMeta) => {
        return {
          students: response,
          meta,
        };
      },
      providesTags: [tagTypes.student],
    }),
    // get single student endpoint
    student: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BASE_STUDENT_API_URL}/profile/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.student],
    }),
    // create student user endpoint
    addStudentWithFormData: build.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.student],
    }),
    // update student endpoint
    updateStudent: build.mutation({
      query: (data) => ({
        url: `${BASE_STUDENT_API_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.student],
    }),
    // delete student endpoint
    deleteStudent: build.mutation({
      query: (id) => ({
        url: `${BASE_STUDENT_API_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.student],
    }),
  }),
});

export const {
  useAddStudentWithFormDataMutation, // create student user hook
  useStudentsQuery, // get all student users hook
  useStudentQuery, // get single student user hook
  useUpdateStudentMutation, // update single student user hook
  useDeleteStudentMutation, // delete single student user hook
} = studentApi;
