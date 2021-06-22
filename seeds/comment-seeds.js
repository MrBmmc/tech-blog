const { Comment } = require('../models')

const commentData = [
    {
        postId: 1,
        body: 'buenos dias',
        userId: 2,
    },
    {
        postId: 2,
        body: 'ugly, she went to the dog park and they thought she was a shitzu',
        userId: 3,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;