const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    get all user's contacts
// @access  Private

router.get('/', (req, res) => {
  res.send('Get contacts.');
});

// @route   Post api/contacts
// @desc    post a contact
// @access  Private

router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route   Post api/contacts/:id
// @desc    update a contact
// @access  Private

router.put('/:id', (req, res) => {
  res.send('Update Contact.');
});

// @route   DELETE api/contacts/:id
// @desc    delete a contact
// @access  Private

router.delete('/:id', (req, res) => {
  res.send('Delete contact.');
});

module.exports = router;
