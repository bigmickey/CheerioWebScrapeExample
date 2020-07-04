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
  console.log("title is " + $(bitcoinPriceLink).attr('title'));

  console.log("title is" + $("a[title='Bitcoin']").attr('title'));

  console.log("the current bitcoin price is: " + $('.price', $(bitcoinPriceLink)).text());

//  fs.readFile('assets.txt', 'utf8', function(err,contents) {
//    console.log(contents);
//  });

  var numCoins = fs.readFileSync('assets.txt', 'utf8');
  console.log("The current value of " + numCoins + " bitcoins is " + $('.price', $(bitcoinPriceLink)).text() * numCoins);

// this works!!
//  $('a').each( (index, singleLink) => {
//    var singleHref = $(singleLink).attr('href');
//    console.log(singleHref);
//  });

//  for ( var prop in links[0] ) {
//    console.log(prop); 
//  }

//  links.forEach(e => {
//    for (var prop in e) {
//      console.log(prop);
//    }
//  });

//  let filteredElts = allElts.filter(function(i, elt) {
//    // this === elt
//    return $(this).children().length > 3; 
//  });

//  let items = filteredElts.get();

//  items.forEach(e => {
//    console.log(e.name);
//  });

});

