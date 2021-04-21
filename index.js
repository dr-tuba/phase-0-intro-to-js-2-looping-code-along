const messages = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i ++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        }
    return(messages);
}

writeCards();

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

countDown();

