const express = require('express');
const controller = require('../controllers/storyController.js');
const router = express.Router();

//Get /stories: send all stories to user
router.get('/', controller.index);


//Get /stories/new: send html form for creating a new story

router.get('/new', controller.new);

//Post /stories: create a new story

router.post('/', controller.create);

//GET /stories/:id send details of story identified by id
router.get('/:id', controller.show);

//GET /stories/:id/edit: send html form for editing an existing story
router.get('/:id/edit', controller.edit);

//PUT /stories/:id update the story identified by ID
router.put('/:id', controller.update);

//DELETE /stories/:id, delete the story identified by id
router.delete('/:id', controller.delete);

module.exports = router;
