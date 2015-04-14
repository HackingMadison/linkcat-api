var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var _ = require('lodash');

var app = express();

app.get('/search', function (req, res) {
  request('http://www.linkcat.info/cgi-bin/koha/opac-search.pl?idx=&limit=&q=' + req.query.q, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var response = {};
      response.meta = {};
      response.data = [];
      response.meta.resultsCount = parseInt($('span.numresults').text())
      var results = _.drop($('.searchresults tr'))
      results.map(function(node){
        response.data.push({
          title: null
        })
      })
      res.json(response)
    }
  });
});

app.get('/items/:id', function(req, res){
  request('http://www.linkcat.info/cgi-bin/koha/opac-detail.pl?biblionumber=' + req.params.id, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var response = {
        title: _.trimRight($('span.displaytitle').text(), "/ ")
      }
      res.json(response)
    }
  });
});

app.listen(3000)