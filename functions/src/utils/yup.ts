import * as Yup from "yup";

import { ErrorResponse } from "../types";

export const makeErrorResponse = function (
  error: Yup.ValidationError
): ErrorResponse {
  return [{ path: error.path || ".", errors: error.errors }];
};
