import { NextFunction, Request, Response } from 'express';

import * as yup from 'yup';

export const validateCreate = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await yup
      .object()
      .shape({
        // productTypeId: yup.string().required(),
        name: yup.string().required(),
        // description: yup.string(),
        // image: yup.string(),
        // purchasePrice: yup.number().min(0.01).required(),
        // salePrice: yup.number().min(0.05).required(),
      })
      .validateSync(req.query, { abortEarly: false });

    return next();
  } catch (e) {
    return next(e);
  }
};