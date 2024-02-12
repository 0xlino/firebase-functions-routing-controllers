import * as functions from "firebase-functions";

let runningInFirebase = false;

/**
 * Here is a example of adding a express application onto a cloud function for more complex applications
 */
import expressApplicationRoutingControllersExample from "./expressApplicationRoutingControllersExample";

export const app: functions.HttpsFunction = functions.https.onRequest(expressApplicationRoutingControllersExample);

if (!runningInFirebase) {
    expressApplicationRoutingControllersExample.listen(3000, () => {
        console.log('Example app listening on port 3000!');
    });
}