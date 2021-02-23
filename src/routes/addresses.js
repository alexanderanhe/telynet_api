const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const mysqlConnection  = require('../database.js');

// Get all addresses
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM addresses', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      res.status(500).json({error: 'There was an error.', desc: err});
    }
  }); 
});

// GET An Address
router.get('/:code', (req, res) => {
  const { code } = req.params; 
  mysqlConnection.query('SELECT * FROM addresses WHERE code = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      res.status(500).json({error: 'There was an error.', desc: err});
    }
  });
});

// INSERT an address
router.post('/', (req, res) => {
    const { code, name, address, population, cp, city, telephone, email } = req.body;
    if (code && name && address && population && cp) {
      const query = `
        INSERT INTO addresses VALUES ( ?, ?, ?, ?, ?, ?, ?, ?);
      `;
      mysqlConnection.query(query, [code, name, address, population, cp, city, telephone, email], (err, rows, fields) => {
        if(!err) {
          res.json({status: 'Address Saved'});
        } else {
          res.status(500).json({error: 'There was an error.', desc: err});
        }
      });
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

// UPDATE an address
router.put('/:code', (req, res) => {
  const { code } = req.params; 
  const { name, address, population, cp, city, telephone, email } = req.body;
  console.log(name, address, population, cp, city, telephone, email, code)
  if (code && name && address && population && cp) {
    const query = `
      UPDATE addresses
      SET name = ?, 
        address = ?, 
        population = ?, 
        cp = ?, 
        city = ?, 
        telephone = ?, 
        email = ?
      WHERE code = ?;
    `;
    mysqlConnection.query(query, [name, address, population, cp, city, telephone, email, code], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Address Saved'});
      } else {
        res.status(500).json({error: 'There was an error.', desc: err});
      }
    });
  } else {
      res.status(500).json({error: 'There was an error.'});
  }
});

// DELETE an address
router.delete('/:code', (req, res) => {
  const { code } = req.params;
  mysqlConnection.query('DELETE FROM addresses WHERE code = ?', [ code ], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Address Deleted'});
    } else {
      res.status(500).json({error: 'There was an error.', desc: err});
    }
  });
});

module.exports = router;