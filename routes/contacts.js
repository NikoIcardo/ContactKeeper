const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   GET api/contacts
// @desc    get all user's contacts
// @access  Private

router.get('/', auth, async (req, res) => {
  try {
    // sorting by date: -1 will show the most recent contacts first.
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// @route   Post api/contacts
// @desc    post a contact
// @access  Private

router.post(
  '/',
  [auth, [check('name', 'Please enter a name.').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   Post api/contacts/:id
// @desc    update a contact
// @access  Private

router.put('/:id', auth, (req, res) => {
  res.send('Update Contact.');
});

// @route   DELETE api/contacts/:id
// @desc    delete a contact
// @access  Private

router.delete('/:id', auth, (req, res) => {
  res.send('Delete contact.');
});

module.exports = router;
