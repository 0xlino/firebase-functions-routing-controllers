import { createParamDecorator } from "routing-controllers";

export function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyKey} with args: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
}

function checkSomeCondition() {
    return true;
}

export function SomeCheck(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        if (checkSomeCondition()) {
            console.log("Condition passed.");
            return originalMethod.apply(this, args);
        } else {
            console.log("Condition failed.");
            return null; // or throw an error, etc.
        }
    };
}

export function GetCustomThing(options?: { required?: boolean }) {
    return createParamDecorator({
        required: options && options.required ? true : false,
        value: async action => {
            return {
                id: 1,
                name: 'test'
            };
        },
    });
}