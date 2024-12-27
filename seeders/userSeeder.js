const dbconnect = require('../config/dbconnect');
const User = require('../models/User');
const { faker } = require("@faker-js/faker");

dbconnect();

async function generateUser(num){
    try{
        const users = [];
        for (var i = 0; i < num; i++) {
            const user = {
                name: faker.internet.displayName(),
                email: faker.internet.email(),
                password: faker.internet.password()
            }
            users.push(user)
        }

        await User.insertMany(users);
        console.log("User Seeder Run Successfully!");
    }
    catch (err) {
        console.log(err);
    }

}

generateUser(3)