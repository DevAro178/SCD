const express = require('express');
const Crud = require('../models/crudModel');

const app = express();

// Middleware and routes setup
app.use(express.json()); // This middleware is important for parsing JSON in requests

// Display All CRUD Data
app.get('/api/crud', (req, res) => {
  Crud.find(function (err, cruds) {
    res.json(cruds);
  });
});

// Create New CRUD
app.post('/api/crud', (req, res) => {
  let crud = new Crud(req.body);
  crud
    .save()
    .then((crud) => {
      res.send(crud);
    })
    .catch(function (err) {
      res.status(422).send('Crud add failed');
    });
});

// Show a particular CRUD Detail by Id
app.get('/api/crud/:id', (req, res) => {
  Crud.findById(req.params.id, function (err, crud) {
    if (!crud) {
      res.status(404).send('No result found');
    } else {
      res.json(crud);
    }
  });
});


// Update CRUD Detail by Id
// Update CRUD Detail by Id
const crud_update = async (req, res) => {
	try {
	  const updatedCrud = await Crud.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
	  if (!updatedCrud) {
		// If the record is not found, return a 404 status code
		return res.status(404).json({ message: 'Crud not found' });
	  }
  
	  // Return the updated document as a response
	  res.json(updatedCrud);
	} catch (err) {
	  res.status(422).send('Crud update failed');
	}
  };
  
  // Delete CRUD Detail by Id
  const crud_delete = async (req, res) => {
	try {
	  const deletedCrud = await Crud.findByIdAndRemove(req.params.id);
  
	  if (!deletedCrud) {
		// If the record is not found, return a 404 status code
		return res.status(404).json({ message: 'Crud not found' });
	  }
  
	  // Return a success message and the deleted document as a response
	  res.status(200).json({ message: 'Crud deleted', deletedCrud });
	} catch (err) {
	  res.status(400).send('Crud delete failed');
	}
  };
  
  

module.exports = app;
