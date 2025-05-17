import bcrypt from 'bcrypt';
import { fakerES as faker } from '@faker-js/faker';

export const generateMockUsers = (count = 1) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      _id: faker.database.mongodbObjectId(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 70 }),
      password: bcrypt.hashSync('coder123', 10),
      role: faker.helpers.arrayElement(['user', 'admin']),
      pets: [],
    });
  }
  return users;
};

export const generateMockPets = (count = 1) => {
  const pets = [];
  for (let i = 0; i < count; i++) {
    pets.push({
      _id: faker.database.mongodbObjectId(),
      name: faker.animal.cat(),
      species: faker.animal.type(),
      age: faker.number.int({ min: 1, max: 15 }),
    });
  }
  return pets;
};