import 'reflect-metadata';
import * as express from "express";
import { Request, Response, Application } from "express";
import { Container } from 'typedi';
import { useExpressServer, useContainer } from 'routing-controllers';
import { LoggingMiddleware } from './middleware/logging';
import { CustomErrorHandler } from './customError';
import { ThingController } from './thing/thing.controller';
import { registerController as registerCronJobs, useContainer as cronUseContainer } from 'cron-decorators';
import { ExampleCronJob } from './cron/CronJob';

const _registerCronJobs = (appConfig: any): any => {
    if (!appConfig.cronJobsEnabled) {
      return false;
    }

    return registerCronJobs([ExampleCronJob]);
}

/**
 * Why this way and not nestjs, that becuase using routing-controllers is a lot more flexible 
 * and can be used with any express application and it is a lot more simple to use and understand 
 * and use the tools that make nestjs possible it's mainly just routing-controllers and typedi
 * but it adds a lot of complexity and a lot of things that you don't need and it is not as flexible 
 * as routing-controllers
 */

const expressApplication: Application = express();
expressApplication.use(express.json());

expressApplication.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

useContainer(Container);
cronUseContainer(Container);

_registerCronJobs({
    cronJobsEnabled: true
});

console.log('Cron Jobs Registered');

useExpressServer(expressApplication,{
    controllers: [ThingController],
    middlewares: [
        // Stuff here runs before the controllers, global middleware
        LoggingMiddleware,
        CustomErrorHandler
    ],
    interceptors: [],
    defaultErrorHandler: false,
    // add the @authorized() decorator to the controllers
    authorizationChecker: async (action: any, roles: any) => {
        return true;
    },
    // setup the @CurrentUser decorator
    currentUserChecker: async (action: any) => {
        // let session = action.request.session;
        // let authorizionToken = action.request.headers['authorization'];
        return {
            id: 1,
            username: 'Benjamin Button'
        }
    }
});

export default expressApplication;

