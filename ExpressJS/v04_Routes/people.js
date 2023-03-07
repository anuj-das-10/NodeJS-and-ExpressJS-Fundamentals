const express = require('express');
const router = express.Router();
let {people} = require('../data');

// De-structuring
const { 
    getPerson, 
    createPerson,
    createPersonPostman,
    updatePerson, 
    deletePerson 
} = require('../v05_Controller/people');
const { route } = require('./people');

// Method - 1

// router.get('/', getPerson)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)


// Method - 2
router.route('/').get(getPerson).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);
  

module.exports = router;