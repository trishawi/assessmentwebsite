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
var famousquotes = [
    '"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
    '“The most difficult thing is the decision to act, the rest is merely tenacity.” —Amelia Earhart',
    '“Just one small positive thought in the morning can change your whole day.” — Dalai Lama',
    '“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.” — Ariana Huffington'
]

function famousnewQuote() {
    var randomNumber = Math.floor(Math.random() * (famousquotes.length));
    document.getElementById('famousquoteDisplay').innerHTML = famousquotes[randomNumber];
}

// self improvement messages
var selfquotes = [
    'Be better than you were yesterday.',
    'Do not stay near people who point out your insecurities.',
    'Surround yourself with people who impact you positively.',
    'Be the type of person you want to meet.'
]

function selfnewQuote() {
    var randomNumber = Math.floor(Math.random() * (selfquotes.length));
    document.getElementById('selfquoteDisplay').innerHTML = selfquotes[randomNumber];
}