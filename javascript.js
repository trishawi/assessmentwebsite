// general quotes
var generalquotes = [
    'You are worth so much.',
    'You have come so far and I\'m proud of you.',
    'You\'re doing great, keep going.',
    'You are loved and wanted.'
]

function generalnewQuote() {
    var randomNumber = Math.floor(Math.random() * (generalquotes.length));
    document.getElementById('generalquoteDisplay').innerHTML = generalquotes[randomNumber];
}


// messages for work or study
var workquotes = [
    'Keep going, you are almost there.',
    'You have come so far and I\'m proud of you.',
    'The work may be hard but you are able to do it.',
    'You are loved and wanted.'
]

function worknewQuote() {
    var randomNumber = Math.floor(Math.random() * (workquotes.length));
    document.getElementById('workquoteDisplay').innerHTML = workquotes[randomNumber];
}

// famous motivational quotes
var famlousquotes = [
    'Keep going, you are almost there.',
    'You have come so far and I\'m proud of you.',
    'The work may be hard but you are able to do it.',
    'You are loved and wanted.'
]

function famousnewQuote() {
    var randomNumber = Math.floor(Math.random() * (famousquotes.length));
    document.getElementById('famousquoteDisplay').innerHTML = famousquotes[randomNumber];
}