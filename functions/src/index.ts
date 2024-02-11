import * as functions from "firebase-functions";
/**
 * Here is a example of adding a express application onto a cloud function for more complex applications
 */
import expressApplicationRoutingControllersExample from "./expressApplicationRoutingControllersExample";

export const app: functions.HttpsFunction = functions.https.onRequest(expressApplicationRoutingControllersExample);