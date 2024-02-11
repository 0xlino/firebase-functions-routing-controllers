import * as Yup from 'yup';
import { EXAMPLE_SCHEMA } from './schema/exampleSchema';

interface ValidationError {
  path: string;
  errors: string[];
}

export type ErrorResponse = ValidationError[];
export type ExampleSchemaInput = Yup.InferType<typeof EXAMPLE_SCHEMA>;
