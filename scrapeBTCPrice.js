let request = require('request');
let cheerio = require('cheerio');
var fs = require('fs');

request({
  method: 'GET',
  url: 'https://cryptowat.ch/'
}, (err, res, body) => {
  if (err) return console.error(err);

  let $ = cheerio.load(body);

  let title = $('title');

  console.log(title.text());

  const allLinks = $("a");
  console.log("number of links in DOM = " + allLinks.length);

  const bitcoinPriceLink = $("a[title='Bitcoin']");
  console.log("the current bitcoin price is: " + $(".price", $(bitcoinPriceLink)).text());

});

