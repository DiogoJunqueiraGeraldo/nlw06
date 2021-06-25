import "reflect-metadata";

import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import router from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (
    error: Error,
    request: Request,
    response: Response,
    nextFunction: NextFunction
  ) => {
    if (error instanceof Error) {
      return response.status(400).json({
        code: 400,
        status: "Bad Request",
        message: error.message,
      });
    }

    return response.status(500).json({
      code: 500,
      status: "Internal Server Error",
      message: "Ocorreu um erro inesperado no servidor",
    });
  }
);

app.listen(3000, () => console.log("Server is running"));
