import {
    JsonController,
    Get,
    Authorized,
    CurrentUser,
    UseBefore,
    UseAfter,
    UseInterceptor,
    Action,
    Param
} from 'routing-controllers';

import { Service } from 'typedi';
import { GetCustomThing, LogMethod, SomeCheck } from './thing.decorators';
import { validateCreate } from "./thing.validator";
import { ThingService } from './thing.service';

@Service()
@JsonController('/thing')
export class ThingController {
    private thingService: ThingService;
    constructor() {
        this.thingService = new ThingService();
    }

    @Get('/')
    // Only authorized users can access this action
    @Authorized()
    // Do something before the action
    @UseBefore(validateCreate)
    // Log the method decorator
    @LogMethod
    // Some custom decorator
    @SomeCheck
    // Do something after the action
    @UseAfter(validateCreate)
    // Intercept the response and do something with it
    // @UseInterceptor(function (action: Action, content: any) {
    //     // drop the dropped prop 
    //     return delete content.dropped;
    // })
    /**
     * @param user - The current user
     * @param thing - The custom thing
     */
    get(
        @CurrentUser() user: any,
        @GetCustomThing() thing: any,
        @Param('id') id?: number
    ) {
        let a = this.thingService.getProducts({ name: 'test' });
        return {
            user: user,
            message: 'This action returns all things',
            thing: thing,
            dropped: 'This is a test error',
            a: a
        }
    }

    @Get('/:id')
    async show(@Param('id') id: number): Promise<any | undefined> {
        return 'test'
    }

}