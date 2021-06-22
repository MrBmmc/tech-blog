const {Post} = require('../models');

const postData = [
    {
        title: 'Greetings',
        body: 'Good Afternoon, Good Evenning, and Good Night',
        userId: 1,
    },
    {
        title: 'Dissmissal',
        body: 'Your momma soooooooooooo _____',
        userId: 2,
    },
    {
        title: 'Location',
        body: 'Here, there, over yonder, Under where?',
        userId: 2,
    },
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;