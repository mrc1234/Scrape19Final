'use strict';
const express = require('express'),
      router = express.Router(),
      request = require('request'),
      cheerio = require('cheerio'),
      Article = require('../../models/article'),
      Note = require('../../models/note');

router.get('/scrape', function(req, res, next) {
    request('https://www.huffingtonpost.com/', function(error, response, html) {
        const $ = cheerio.load(html);
        // let results = [];

        $('.card__headline').each(function(i, e) {
            let title = $(e).children('a').children(".card__headline__text").text();
            const  link = $(e).children('a').attr('href'),
                // single = {};
            if (title && link) {
                single = {
                    title: title,
                    link: link
                };

                let entry = new Article(single);
               
                entry.save(function(err, doc) {
                    if (err) {
                        if (!err.errors.link) {
                            console.log(err);
                        }
                    } else {
                        console.log('new article added');
                    }
                });
            }
        });
        next();
    });
}, function(req, res) {
    res.redirect('/');
});


router.get('/', function(req, res) {
    Article
        .find({})
        .exec(function(error, docs) {
            if (error) {
                console.log(error);
                res.status(500);
            } else {
                res.status(200).json(docs);
            }
        });
});

router.get('/saved', function(req, res) {
    Article
        .find({})
        .where('saved').equals(true)
        .where('deleted').equals(false)
        .populate('notes')
        .exec(function(error, docs) {
            if (error) {
                console.log(error);
                res.status(500);
            } else {
                res.status(200).json(docs);
            }
        });
});


router.post('/save/:id', function(req, res) {
    Article.findByIdAndUpdate(req.params.id, {
        $set: { saved: true}
        },
        { new: true },
        function(error, doc) {
            if (error) {
                console.log(error);
                res.status(500);
            } else {
                res.redirect('/');
            }
        });
});


router.get('/deleted', function(req, res) {
    Article
        .find({})
        .where('deleted').equals(true)
        .exec(function(error, docs) {
            if (error) {
                console.log(error);
                res.status(500);
            } else {
                res.status(200).json(docs);
            }
        });
});



module.exports = router;
