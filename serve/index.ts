import express from "express";
import http from "http";
import path from "path";

const app = express();

const distPath = path.resolve(__dirname, "dist");
app.use(express.static(distPath));

const publicPath = path.resolve(__dirname, "public");
app.use("/public", express.static(publicPath));

http.createServer(app).listen(3000);
