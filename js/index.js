console.log( "I'm ready!" ) 

// Iteration 1: Names and Input
let hacker1 = 'Uriel';
console.log( `The driver's name is ${hacker1}`);

let hacker2 = 'Marta';
console.log( `The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if ( hacker1.length > hacker2.length ) {
    console.log( `The driver has the longest name, it has ${hacker1.length}.` )
} else if ( hacker2.length > hacker1.length ) {
    console.log( `It seems that the navigator has the longest name, it has ${hacker2.length} characters.` )
} else {
    console.log( `Wow, you both have equally long names, ${hacker1.length} characters!` )
}


// Iteration 3: Loops

// 3.1 

let newName = '';

for ( let i = 0; i < hacker1.length; i++ ) {
    newName += hacker1[i].toUpperCase() + ' ';
}

console.log( newName )

// 3.2

let navReversed = '';

for ( let i = hacker2.length - 1; i >= 0; i-- ) {
    navReversed += hacker2[i];
}

console.log( navReversed )

// 3.3


    if ( hacker1 === hacker2 ) {
        console.log('What?! You both have the same name?')
        
    } else if ( hacker1[0] < hacker2[0] ) {
        console.log( `The driver ${hacker1} goes first.` )
        
    } else if ( hacker2[0] > hacker1[0] ) {
        console.log( `Yo, the navigator ${hacker2} goes first definitely.` )
        
    }


// Bonus

// 1

let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor augue eu lacus aliquam sodales. Cras congue, sem a tempus fermentum, enim nisl convallis magna, vestibulum viverra lacus quam vitae est. Curabitur nec metus elit. Aenean velit nibh, efficitur eget lacus at, condimentum feugiat massa. Morbi venenatis consectetur dignissim. Nullam non augue ac nunc rutrum posuere. Donec ut tortor ex. Phasellus bibendum nunc ligula, non efficitur sapien scelerisque a. Maecenas in sem volutpat, commodo libero vitae, pharetra justo. Nullam nibh nunc, commodo sit amet malesuada id, ultrices nec nisi. Pellentesque aliquet ipsum nisi, non congue nibh mattis et. Aliquam mollis condimentum lorem, non cursus dui sollicitudin sit amet. Aliquam pellentesque convallis libero. Vestibulum consectetur ipsum vel elit pretium tempor. Fusce eget erat sapien. Sed vestibulum, urna mattis venenatis feugiat, diam lorem venenatis libero, ut consectetur magna lorem viverra ipsum. Mauris semper, nisl in rutrum aliquet, mauris lorem faucibus enim, eget aliquet tortor tortor fringilla velit. Donec sit amet lectus et sapien rhoncus finibus id eget enim. Pellentesque semper non tortor in dignissim. Morbi consectetur, purus sed consequat euismod, turpis est molestie ex, quis ultrices mauris ante in urna. Morbi metus magna, mattis quis mauris ut, consectetur varius magna. Curabitur velit tellus, blandit eget eleifend vestibulum, gravida nec arcu. Fusce vitae sagittis mi, non posuere nibh. Nulla a commodo tellus. Vestibulum dictum, magna vitae sollicitudin scelerisque, sapien felis vehicula odio, a gravida nisl nunc quis quam. Vestibulum ac posuere nibh. Nullam at fringilla turpis. Ut at cursus arcu. Nullam gravida ornare justo, sed mollis odio facilisis at. In lacinia porttitor ex sit amet imperdiet. Nulla facilisi. Sed sagittis suscipit aliquet.'

let wordsCounter = 1;

for ( let i = 0; i < longText.length; i++ ) {
    if (longText[i] === ' ' ) {
        wordsCounter++;
    }
}

console.log( wordsCounter )

let etCounter = 0;

for ( let i = 0; i < longText.length; i++ ) {
    if ( longText[i] === ' ' && longText[i + 1] === 'e' && longText[i + 2] === 't' && longText[i + 3] === ' ') {
        etCounter++;
    }
}

console.log( etCounter )

// 2

let phraseToCheck = 'Algún valor en string';
let phraseToCheckReversed = '';
let phraseToCheckWithoutSpaces = '';

// 1º le quitamos los espacios
for ( let i = 0; i < phraseToCheck.length; i++) {
    if ( phraseToCheck[i] === ' ' ) {
        continue;
    } else {
        phraseToCheckWithoutSpaces += phraseToCheck[i];
    }
}

console.log( phraseToCheckWithoutSpaces )

// 2º Ahora le damos la vuelta

for ( let i = phraseToCheckWithoutSpaces.length - 1; i >= 0; i--) {
    phraseToCheckReversed += phraseToCheckWithoutSpaces[i]
}

console.log( phraseToCheckReversed )

// 3º Ahora los ponemos todo en minúsculas

phraseLowercase1 = phraseToCheckWithoutSpaces.toLowerCase()

console.log( phraseLowercase1 )

phraseLowercase2 = phraseToCheckReversed.toLowerCase()

console.log( phraseLowercase2 )

// 4º Ahora los comparamos

if ( phraseLowercase1 === phraseLowercase2 ) {
    console.log( 'Is a palindrome!' )
} else if ( phraseLowercase1 !== phraseLowercase2 )
    console.log( 'Is not a palidrome! ')
