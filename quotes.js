//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Arny', 
     'quote': 'I will slice up the cake and give you the first piece!'
    },
    {'author': 'Arny', 
     'quote': 'You are so talented at playing instruments! Especially piano and saxophone.'
    },
    {'author': 'Arny', 
     'quote': 'Leon is such a nice name. Brave and strong like a lion.'
    },
    {'author': 'Arny', 
     'quote': 'Please do not forget to stock up on ice cream hehe. It is your emergency food.'
    },
    {'author': 'Arny', 
     'quote': 'Do not talk to strangers or you might fall in love'
    },
    {'author': 'Arny', 
     'quote': 'I hope that you will have a great day accompanied with all the people that loves you truly.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}
