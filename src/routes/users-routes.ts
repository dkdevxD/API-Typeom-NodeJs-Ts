import { Router } from 'express';
import { UsersController } from '../controller/Users-Controller';
import { Users } from '../entity/Users';

export const usersRouter = Router();
const userController = new UsersController();

usersRouter.post('/', async (req, res) => {
  try {
    const { name, email, password, created_At } = req.body;
    const user = new Users(name, email, password, created_At);
    const newUser = await userController.add(user);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    throw new Error('It was not possible to add the user!');
  }
});

usersRouter.get('/', async (req, res) => {
  try {
    const users = await userController.getAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    throw new Error('It was not possible to search for users!');
  }
});

usersRouter.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userController.getOne(id)
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    throw new Error('User not found or does not exist!');
  }
});

usersRouter.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userController.deleteUser(id)
    res.status(200).json('Usuario deletado!');
  } catch (error) {
    console.log(error);
    throw new Error('It was not possible to delete the user!');
  }
});