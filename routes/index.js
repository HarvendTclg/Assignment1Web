//getting the ejs page from the folder
const express = require('express');
const router = express.Router();

//in here the router just load all necesarry file to be loaded
router.get('/', (req, res) => {
  
  res.render('homepage', { pageTitle: 'Home Page' });
});
router.get('/contact', (req, res) => {
  
  res.render('contact', { pageTitle: 'Contact Page' });
});
router.get('/about', (req, res) => {
  
  res.render('about', { pageTitle: 'About Page' });
});
router.get('/projects', (req, res) => {
  
  res.render('projects', { pageTitle: 'Projects Page' });
});
router.get('/service', (req, res) => {
  
  res.render('service', { pageTitle: 'Service page' });
});
module.exports = router;