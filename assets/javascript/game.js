
var wins = 0;
var losses = 0;
var numofguesses = 9;
var lettersguessed = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ]
var theword = [];
var animalWordsArr = ['armadillo', 'xenops', 'anteaters', 'xiaosaurus', 'Zanzibar'];
var animalWord = animalWordsArr[Math.floor(Math.random() * animalWordsArr.length)];



function startup() {
    document.addEventListener("keyup", letter)
    for (var i = 0; i< animalWord.length; i++)
    {
    theword[i] = "_";
    }
    //lettersguessed = theword.join(" ");
    //document.getElementById("answer").innerHTML = animalWordsArr;
}

function letter (e) {
    console.log ('hi')
    var letter = document.getElementById("letter").value;
    if (letter.length > 0)
    {
        for (var e = 0; e < animalWord.length; i++)
{
    if (animalWord[i] === letter)
    {
        theword[i] = letter;
    }
}
    }
}