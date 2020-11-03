import { getManager } from "typeorm";
import { Users } from "../entity/Users";

export class UsersController {

  async add(user: Users) {
    try {
      const newUser = await getManager().save(user);
      return newUser
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    const users = await getManager().find(Users)
    return users;
  }

  async getOne(id:number) {
    const user = await getManager().findOne(Users, id);
    return user;
  }

  async deleteUser(id:number) {
    const user = await getManager().delete(Users, id);
    return user;
  }
}