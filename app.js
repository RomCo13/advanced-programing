import express from "express";
import bodyParser from "body-parser";
import postRouter from "./routes/posts_route.js";
import commentRouter from "./routes/comments_router.js";

export function createApp() {
    const app = express();

    app.use(bodyParser.json());
    app.use("/posts", postRouter);
    app.use("/comments", commentRouter);

    return app;
}
