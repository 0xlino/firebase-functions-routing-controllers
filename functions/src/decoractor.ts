import { CustomError } from 'express-handler-errors';
import { createParamDecorator } from 'routing-controllers';

const makeSureShopHasMyShopfiyInIt = async (shop: string) => {
    let myShopify = 'myshopify.com';
    if (!shop.includes(myShopify)) {
        throw new CustomError({
            code: 'ERROR_MYSHOP_NOT_FOUND',
            message: 'woops',
            status: 400,
        });
    }
}

export function UserFromSession(options?: { required?: boolean }) {
    return createParamDecorator({
        required: options && options.required ? true : false,
        value: async action => {
            // ensure ?shop is in the query string
            const shop = action.request.query.shop;
            if (!shop) {
                throw new CustomError({
                    code: 'ERROR_NO_SHOP',
                    message: 'woops',
                    status: 400,
                });
            }

            await makeSureShopHasMyShopfiyInIt(shop);

            return {
                id: 1,
                username: 'test'
            };

        },
    });
}