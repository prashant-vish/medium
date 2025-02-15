import { Hono } from "hono";

const mainRouter = new Hono();

mainRouter.get("/", (c) => {
  return c.json({ message: "Welcome to the API" });
});

mainRouter.post("signup", (c) => {
  return c.json({ message: "Signup success" });
});

mainRouter.post("/signin", (c) => {
  return c.json({ message: "Signin success" });
});

mainRouter.post("/blog", (c) => {
  return c.json({ message: "Blog created" });
});

mainRouter.put("/blog", (c) => {
  return c.json({ message: "Blog updated" });
});

mainRouter.get("/blog/:id", (c) => {
  return c.json({ message: "Blog fetched" });
});
export default mainRouter;
