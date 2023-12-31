import { faker } from '@faker-js/faker';

export const generateUsers = () => {
    let createdUsersArray = [];

    for (let i = 0; i < 20; i++) {
        let obj = {
            id: faker.string.uuid(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            age: faker.number.int({ min: 18, max: 60 }),
            email: faker.internet.email(),
        };
        createdUsersArray.push(obj)
    }

    return createdUsersArray
};
