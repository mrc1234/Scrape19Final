// ------------------------------------------------------------------------- setup/vars
'use strict';
const express = require('express'),
      router = express.Router(),
      request = require('request'),
      cheerio = require('cheerio'),
      Article = require('../../models/article'),
      Note = require('../../models/note');

// ------------------------------------------------------------------------- add link to notes      
router.get('/', function(req, res) {
    res.status(200).send(`<a href='/api/articles/'>articles</a><br>
                          <a href='/api/notes/'>notes</a><br>
                          <a href='/'>home</a><br>`);
});

// ------------------------------------------------------------------------- articles / notes routes
router.use('/articles', require('./articles'));
router.use('/notes', require('./notes'));

module.exports = router;
