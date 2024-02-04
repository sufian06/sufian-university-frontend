import * as yup from "yup";

export const createDepartmentSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
});
