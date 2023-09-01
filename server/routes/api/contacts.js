const express = require('express');
const router = express.Router();

const Contact = require('../../models/Contacts');


// retrieving contacts
router.get('/', (req, res) => {
    Contact.find().then(contacts => res.json(contacts)).catch(err => res.status(404).json({ noContactsFound: 'No contacts found.' }));
});

// retrieving single contact
router.get('/:id', (req, res) => {
    Contact.findById(req.params.id).then(contact => res.json(contact)).catch(err => res.status(404).json({ noContactsFound: 'No such contact found.' }));
});

// save contact
router.post('/', (req, res) => {
    Contact.create(req.body).then(contact => res.json({ msg: 'Contact saved successfully!' })).catch(err => res.status(400).json({ error: 'Failed to save the contact.' }));
});

// update contact
router.put('/:id', (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, req.body).then(contact => res.json({ msg: 'Contact updated successfully!' })).catch(err => res.status(400).json({ error: 'Failed to update contact.' }));
});

// delete contact
router.delete('/:id', (req, res) => {
    Contact.findByIdAndRemove(req.params.id).then(contact => res.json({ msg: 'Contact deleted successfully!' })).catch(err => res.status(404).json({ error: 'Failed to delete the contact.' }));
});

module.exports = router;