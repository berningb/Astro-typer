window.onload = function () {
    var i = 0;

    document.body.onkeyup = function (e) {
        console.log(wordArr);
        splitWord(wordArr[i]);
        console.log(wordArr[i] + ' word');
        var a = document.getElementById('myInput').value.replace(/\s/g, '');
        var b = a;
        if (a == wordArr[i]) {
            changetextColor(i, b.length, b)
            $('#myInput').val("");
            if (wordArr[i + 1] == undefined) {
                console.log('hey you won');
                document.getElementById('myInput').placeholder = 'You WIN!';
                document.getElementById('myInput').disabled = true;
                stopTimer();
                document.getElementById('wpm').innerHTML = (milis / wordArr.length) + ' words/min';
                i = 0;
            } else {
                i++;
            }
        } else {
            $('#myInput').val(b);
        }
    }
};

var inter,
    milis = 0;

function changetextColor(id, inputLength, word) {
    splitWord(word);
    var x = document.getElementById(id),
        txt = x.textContent.replace(/\s/g, ''),
        newText = "";
    for (var i = 0, l = inputLength; i < l; i++) {
        newText += txt.charAt(i).fontcolor('grey');
    }
    x.innerHTML = newText + ' ';
}

function split(arr) {
    wordArr = arr.split(' ');
}


function splitWord(word) {
    letterArr = word.split('');
}


function formatMilis(milis) {

    var curretnmilis = milis;
    var hours = Math.floor(curretnmilis / 360000);
    curretnmilis %= 360000;
    console.log(curretnmilis);
    var minutes = Math.floor(curretnmilis / 6000);
    curretnmilis %= 6000;
    console.log(curretnmilis);
    var sec = Math.floor(curretnmilis / 100);
    curretnmilis %= 100;
    console.log(curretnmilis);

    var timerThing = "";
    timerThing += hours + ":" + minutes + ":" + sec + ":" + curretnmilis;


    return timerThing;

}

function begin() {
    inter = setInterval(function () {
        start()
    }, 10);
}

function start() {
    milis++;
    document.getElementById("time").innerHTML = formatMilis(milis);

}

function stopTimer() {
    clearInterval(inter)
}



function show() {
    if (document.getElementById('paragraphs').style.left == '0px') {
        document.getElementById('paragraphs').style.left = '-500px';
    } else {
        document.getElementById('paragraphs').style.left = '0px';
    }
}

function hide() {
    document.getElementById('paragraphs').style.left = '-500px';
}

var wordArr = [];
var letterArr = [];
var wordlist = "testing this";
var beginner = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ofectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ofectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of";
var easy = "This is probably the easiest thing i've ever done! I can't believe how simple it is to type out what is on the page.";
var medium = "This is so medium";
var hard = "This is so hard";
var impossible = "This is so impossible";