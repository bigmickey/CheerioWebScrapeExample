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

  const links = [];

//  let allLinks = $('a');

//  allLinks.each((index, element) => {
//    links.push($(element));
//  });


//  links.forEach(e => {
//    console.log("title is " + e.attr('title'));
//    console.log("name is " + e.attr('name'));
//    console.log("href is " + e.attr('href'));
//  });

// trying to use find to pick out hyperlink with title = Bitcoin


//  $('a').each(function(i, element) {
//    if ( $(this).attr('title') == 'Bitcoin' ) {
//      console.log("title is " + $(this).attr('title'));
//      console.log("name is " + $(this).attr('name'));
//      console.log("href is " + $(this).attr('href'));
//      console.log($(this));
////      console.log($(this).find('span').attr('class'));
//    }
//  });

//  $('.price').each(function(i, element) {
//    if( $(this).parent().attr(title) == 'Bitcoin' ) {
//      console.log($(this).text());
//    }
//    console.log($(this).parent().parent().attr(title));
//    console.log($(this));
//  });

//  const firstPrice = $('.price')[0];
//  console.log("first price is .. ");
//  console.log($(firstPrice));

//  console.log("firstPrice's parent is ..");
//  console.log($(firstPrice).parent());


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

