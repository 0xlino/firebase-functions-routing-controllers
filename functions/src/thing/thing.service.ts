import { Service } from "typedi";
import { ExampleSchemaInput } from "../types";
import { EXAMPLE_SCHEMA } from "../schema/exampleSchema";
import * as Yup from "yup";
import { makeErrorResponse } from "../utils/yup";
import { CustomError } from "express-handler-errors";

@Service()
export class ThingService {
    constructor() {
        console.log('ThingService');
    }

    public async getProducts(obj: any): Promise<any> {
        try {
            const exampleInput: ExampleSchemaInput = await EXAMPLE_SCHEMA.validate(
                obj
            );
            return {
                message: 'success',
                example: exampleInput,
                data: '',
                user: obj.user
            };
        } catch (e: any) {
            // if yup validation error
            if (e instanceof Yup.ValidationError) {
                return makeErrorResponse(e);
            }
            if (e instanceof CustomError) throw e;
            throw new CustomError({
                code: 'ERROR_UPDATE_PRODUCT',
                message: 'woops',
                status: 500,
            });
        }
    }
}