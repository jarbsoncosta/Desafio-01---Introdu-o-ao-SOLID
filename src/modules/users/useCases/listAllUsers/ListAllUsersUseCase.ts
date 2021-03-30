import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

// interface IRequest {
// user_id: string;
// }

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }): User[] {
    const adminPermission = this.usersRepository.findById(user_id);

    if (!adminPermission.admin) {
      throw new Error("you are not allowed to lis users");
    }
    return this.usersRepository.list();
    // Complete aqui
  }
}

export { ListAllUsersUseCase };
