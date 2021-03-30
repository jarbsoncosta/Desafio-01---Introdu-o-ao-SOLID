import { request } from "express";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): IRequest {
    const userAlreadyExists = this.usersRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new Error("user already exists");
    }
    if (this.usersRepository.findByEmail(email)) {
      throw new Error("Email already exists.");
    }
    const user = this.usersRepository.create({
      email,
      name,
    });
    return user;
  }
}

export { CreateUserUseCase };
