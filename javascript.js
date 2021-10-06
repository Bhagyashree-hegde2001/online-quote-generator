var quotes = [
    'QA Engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 999999999 beers. Orders a lizard. Orders -1 beers. Orders a sfdeljknesv.-Bill Sempf',
    'There are only two hard things in Computer Science: cache invalidation, naming things and off-by-one errors.-Phil Karlton',
    'In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customer’s shifting idea of what their problem is. -Jeff Atwood',
    'If Java had true garbage collection, most programs would delete themselves upon execution. -Robert Sewell',
    'C++ : Where friends have access to your private members. -Gavin Russell Baker',
    'In C++ it\'s harder to shoot yourself in the foot, but when you do, you blow off your whole leg. -Bjarne Stroustrup',
    'Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves. -Alan Kay',
    'I\'ve noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture.  Near as I can tell, this coincides with the release of MS-DOS. -Larry DeLuca',
    'No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved. -Mark Gibbs',
    'The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry. -Henry Petroski',
    'There are two major products that come out of Berkeley: LSD and UNIX.  We don’t believe this to be a coincidence. -Jeremy S. Anderson'

]


function getQuote(){
    var randomNum = Math.floor(Math.random() * (quotes.length));
    const Quote = document.getElementById("quote");
    Quote.innerHTML = quotes[randomNum];
}
