import * as fbadmin from "firebase-admin";
import * as functions from "firebase-functions";

fbadmin.initializeApp(functions.config().firebase);

const firestore = fbadmin.firestore();

export const db = firestore;
