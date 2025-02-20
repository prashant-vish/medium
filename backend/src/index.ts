import { Hono } from "hono";
import mainRouter from "./routes";

const app = new Hono();
// this is the main entry point for the API
// all routes are defined in the routes folder
// and imported here
app.route("/api/v1", mainRouter);



export default app;
