import { generateMockPets, generateMockUsers } from '../services/mocking.service.js';
import UserModel from '../models/User.model.js';
import PetModel from '../models/Pet.model.js';

export const mockingPets = async (req, res) => {
  const pets = generateMockPets(10);
  res.json({ status: 'success', payload: pets });
};

export const mockingUsers = async (req, res) => {
  const users = generateMockUsers(50);
  res.json({ status: 'success', payload: users });
};

export const generateData = async (req, res) => {
  const { users = 0, pets = 0 } = req.body;
  const fakeUsers = generateMockUsers(users);
  const fakePets = generateMockPets(pets);

  await UserModel.insertMany(fakeUsers);
  await PetModel.insertMany(fakePets);

  res.json({ status: 'success', message: 'Datos insertados correctamente' });
};