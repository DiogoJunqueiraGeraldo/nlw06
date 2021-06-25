import { Request, Response, NextFunction } from "express";

const LOCAL_BASIC_AUTH_MOCK = "Basic YWRtaW46cGFzc3dvcmQ=";

export default async (
  request: Request,
  response: Response,
  nextFunction: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if (authHeader && authHeader === LOCAL_BASIC_AUTH_MOCK) {
    return nextFunction();
  }

  return response.status(401).json({
    code: 401,
    status: "Unauthorized",
    message: "You need to be an Admin to create a new Tag!",
  });
};
