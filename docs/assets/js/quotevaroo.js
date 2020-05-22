var quotes = [
    "There is no easy way from the earth to the stars. -- Seneca",
    "Shoot for the moon. Even if you miss, you'll land among the stars. -- es Brown",
    "Imagination is more important than knowledge. -- Albert, Einstein",
    "The best revenge is massive success. -- Frank Sinatra",
    "Once in your life, try something. Work hard at something. Try to change. Nothing bad can happen. -- Jack ma",
    "You will gonna die -- by Gary Waynerchuk",
    "Try to find the right people, not the best people. -- Jack ma"



]

function newquote() {
    var randomno = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotedisplay').innerHTML = quotes[randomno];
    document.getElementById('quotedisplay').style.color = randomColors();

}

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}