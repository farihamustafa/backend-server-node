const dbconnect = require('../config/dbconnect');
const {faker} = require("@faker-js/faker")
const User = require('../models/User');
dbconnect();
async function generateUser(num){
try {
    const users = [];
    for(var i = 0; i < num;i++ ){
        const user ={
            name: faker.internet.displayName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        }
        users.push(user)

    }
    await User.insertMany(users);
    console.log("User seeder Run successfully");
    
} catch (error) {
    console.log(error)
    
}
}
generateUser(3)