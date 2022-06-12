const path = require('path');

function getMessages(req, res) {
    // res.send('<ul><li>Hello!</li></ul>');
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', '5-puppers-in-the-grass.jpg'));
    res.render('messages', {
        title: 'Messages',
        friend: 'Andreea',
    })
}

function postMessage(req, res) {
    console.log('Updating messages');
}

module.exports = {
    getMessages,
    postMessage
};