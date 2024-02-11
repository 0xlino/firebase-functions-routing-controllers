import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
@Middleware({ type: 'before' })
export class LoggingMiddleware implements ExpressMiddlewareInterface {
    use(request: any, response: any, next: (err: any) => any): void {
        console.log('do something...');
        next(null); // Pass null as the error argument
    }
}