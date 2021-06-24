// Bootstrap Imports
import "reflect-metadata";
import "./database";

// Server Dependencies
import express from "express";
import router from "./routes";

const app = express().use(express.json()).use(router);

app.listen(3000, () => console.log("Server is running"));
