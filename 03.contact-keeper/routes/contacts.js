const express = require('express');
const router = express.Router();

// @route   Get api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
	res.send('Get all users contacts');
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
	res.send('Add contact');
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
	res.send('Update contact');
});
// with put you need an id like/1

// @route   DELETE api/contacts
// @desc    Delete contact
// @access  Private
router.delete('/', (req, res) => {
	res.send('Delete contact');
});
// with delete you need an id like/1

module.exports = router;
