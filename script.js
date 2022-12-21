var quotes = [
    'Alles Gute zum Geburtstag',
    'Viel Glück und Gesundheit',
    'Du bist wunderbar',
    'İyi ki doğdun',
    'Happy birthday',
    'Je te laisserai des mots',
    'Better Call Kadriye',
    'Du bist ein guter Freund',
    'Enjoy your Geburtstag',
    'Merhaba'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below
   var dots = [],
   mouse = {
     x: 0,
     y: 0
   };