import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/hello", () => {
    return "Hello by API";
  })
  .get("/hello/:name", ({ params }) => {
    return { name: params.name };
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
