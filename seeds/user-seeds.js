const { User } = require('../models')

const userData = [
    {
        username: 'johneboy',
        password: 'password1'
    },
    {
        username: 'billybob',
        password: 'password1'
    },
    {
        username: 'thatgirl',
        password: 'password1'
    },
]

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;