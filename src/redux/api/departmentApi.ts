import { IDepartment, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all departments
    departments: build.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.department],
    }),

    // get single department by id
    department: build.query({
      query: (id) => ({
        url: `/${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),

    // update single department by id
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `/${DEPARTMENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.department],
    }),

    // create department
    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const {
  useDepartmentsQuery,
  useDepartmentQuery,
  useUpdateDepartmentMutation,
  useAddDepartmentMutation,
} = departmentApi;
