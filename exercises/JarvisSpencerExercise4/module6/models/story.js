const { DateTime } = require("luxon");
const {v4: uuid} = require('uuid');
const stories = [
    {
        id:  '1',
        title:'A funny Story',
        content: 'Pede class sed taciti dapibus fringilla praesent sollicitudin purus fringilla blandit duis congue, in. Praesent adipiscing mi placerat blandit ac vulputate nonummy curae; habitasse cras phasellus scelerisque Augue iaculis ullamcorper.',
        author: 'Spencer',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id:  '2',
        title:'Its Raining',
        content: 'ajsdfjsdajf. Pede class sed taciti dapibus fringilla praesent sollicitudin purus fringilla blandit duis congue, in. Praesent adipiscing mi placerat blandit ac vulputate nonummy curae; habitasse cras phasellus scelerisque Augue iaculis ullamcorper.',
        author: 'Franklin',
        createdAt: DateTime.local(2021, 2, 12, 18, 0).toLocaleString(DateTime.DATETIME_SHORT)
    }
];

exports.find = () => stories;

exports.findById = id => stories.find(story=>story.id === id);

exports.save = function (story) {
    story.id = uuid();
    story.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    stories.push(story);
};

exports.updateById = function(id, newStory) {
    let story = stories.find(story=>story.id === id);
    if (story) {
        story.title = newStory.title;
        story.content = newStory.content;
        return true;
    } else {
        return false;
    }
};

exports.deleteById =function(id) {
    let index = stories.findIndex(story => story.id === id);
    if (index !== -1) {
        stories.splice(index, 1);
        return true;
    } else {
        return false;
    }
}