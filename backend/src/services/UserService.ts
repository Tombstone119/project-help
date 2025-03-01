import { IUser } from "@src/types/user";
const User = require("../models/userModel");

async function getAll(): Promise<IUser[]> {
  const allUsers = await User.find();
  return allUsers;
}

async function findUserById(id: string): Promise<void> {
  const user = await User.findById(id);
  return user;
}

async function createUser(user: IUser): Promise<void> {
  const newUser = new User({
    name: user.name,
    email: user.email,
  });
  await newUser.save();
  return newUser;
}

async function updateUser({
  id,
  user,
}: {
  id: string;
  user: IUser;
}): Promise<void> {
  const updatedProduct = await User.findByIdAndUpdate(
    id,
    {
      name: user.name,
      email: user.email,
    },
    { new: true }
  );
  return updatedProduct;
}

async function deleteUser(id: string): Promise<void> {
  const deletedProduct = await User.findByIdAndDelete(id);
  return deletedProduct;
}

export default {
  getAll,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
} as const;
