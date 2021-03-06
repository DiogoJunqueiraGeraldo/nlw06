import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, isAdmin } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, isAdmin });

    return response.json(user);
  }
}

export default CreateUserController;
