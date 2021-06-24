import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersRepository";

interface IUserRequest {
  name: string;
  email: string;
  isAdmin?: boolean;
}

class CreateUserService {
  async execute({ name, email, isAdmin }: IUserRequest) {
    const userRepository = getCustomRepository(UsersRepository);

    if (!email) {
      throw new Error("Email Required");
    }

    const alreadyExists = await userRepository.findOne({
      email,
    });

    if (alreadyExists) {
      throw new Error("User already exists");
    }

    const user = userRepository.create({
      name,
      email,
      isAdmin,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
