import * as Yup from "yup";

export const EXAMPLE_SCHEMA = Yup.object().shape({
    name: Yup.string().required(),
})