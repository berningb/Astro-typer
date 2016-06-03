var go = true;
var i = 0;
var thig = 0;
var wordsCompleted = 0;
var won = false;
var wpm = 0;

window.onload = function () {


    document.body.onkeyup = function (e) {
        if (won) {

        } else {
            wpm = Math.round(i / (milis / 6000));
            console.log(wpm)
            document.getElementById('wpm').innerHTML = wpm + ' words/min';
            document.getElementById('myInput').placeholder = '';
            var x = document.getElementById(thig);
            x.style.color = 'green';
            var a = document.getElementById('myInput').value.replace(/\s/g, '');
            var b = a;
            if (document.getElementById('myInput').value != " ") {
                tryit();
            }
            check(a, b);

        }
    }

    function check(a, b) {
        if (a == wordArr[i]) {
            changetextColor(i, b.length, b)
            $('#myInput').val("");
            if (wordArr[i + 1] == undefined) {
                document.getElementById('myInput').placeholder = 'Wow that was great! Try out another paragraph! Or reset!';
                document.getElementById('myInput').disabled = true;
                stopTimer();
                won = true;
                i = 0;
            } else {
                i++;
                thig++;
                wordsCompleted++;
                var y = document.getElementById(thig);
                y.style.color = 'green';
                console.log(wordsCompleted);
                console.log(wpm);
            }
        } else {
            $('#myInput').val(b);
        }
    }
};

var inter,
    milis = 0;

function tryit() {
    if (go) {
        begin();
        go = false;
    }

}


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
    var minutes = Math.floor(curretnmilis / 6000);
    curretnmilis %= 6000;
    var sec = Math.floor(curretnmilis / 100);
    curretnmilis %= 100;

    var timerThing = "";


    timerThing += hours + ":" + minutes + ":" + sec + ":" + curretnmilis;



    return timerThing;

}

function begin() {
    console.log('begins');

    inter = setInterval(function () {
        start();
    }, 10);
}

function start() {
    milis++;
    document.getElementById("time").innerHTML = formatMilis(milis);
}

function stopTimer() {
    clearInterval(inter);
    go = true;
    i = 0;
}



function show() {
    stopTimer();
    if (document.getElementById('paragraphs').style.left == '0px') {
        document.getElementById('paragraphs').style.left = '-500px';
    } else {
        document.getElementById('paragraphs').style.left = '0px';
    }
}

function hide() {
    document.getElementById('paragraphs').style.left = '-500px';
    go = true;
    reset();
}

function reset() {
    location.reload();

}
var wordArr = [];
var letterArr = [];
//Astro-Typer! Simply type inside the input box to get started. At any point, feel free to switch paragraphs by clicking the "new paragraph" button below. 
var wordlist = 'Welcome to';
var beginner = "A black hole is a place in space where gravity pulls so much that even light can not get out.The gravity is so strong because matter has been squeezed into a tiny space.This can happen when a star is dying.";
var easy = "The term planet is ancient, with ties to history, science, mythology, and religion. The planets were originally seen by many early cultures as divine, or as emissaries of deities. As scientific knowledge advanced, human perception of the planets changed, incorporating a number of disparate objects.";
var medium = "Basically, stars are big exploding balls of gas, mostly hydrogen and helium. Our nearest star, the Sun, is so hot that the huge amount of hydrogen is undergoing a constant star-wide nuclear reaction, like in a hydrogen bomb. Even though it is constantly exploding in a nuclear reaction, the Sun and other stars are so large and have so much matter in them that it will take billions of years for the explosion to use all the 'fuel' in the star.";
var hard = "Comets are often referred to as 'dirty snowballs'. They are left over from the formation of stars and planets billions of years ago. Before zipping around the Sun with their characteristic big tails, comets that we see in our solar system start out as big chunks of rock and ice just floating around in something called the Oort Cloud. When the gravity from a large passing body, like a star, becomes strong enough, some large chunks of ice get pulled away from the cloud and head toward the Sun. ";
var impossible = "The NASA roadmap will continue with the launch of the Transiting Exoplanet Surveying Satellite (TESS) in 2017, the James Webb Space Telescope (Webb Telescope) in 2018, and perhaps the proposed Wide Field Infrared Survey Telescope - Astrophysics Focused Telescope Assets (WFIRST-AFTA) early in the next decade. These upcoming telescopes will find and characterize a host of new exoplanets -- those planets that orbit other stars -- expanding our knowledge of their atmospheres and diversity. The Webb telescope and WFIRST-AFTA will lay the groundwork, and future missions will extend the search for oceans in the form of atmospheric water vapor and for life as in carbon dioxide and other atmospheric chemicals, on nearby planets that are similar to Earth in size and mass, a key step in the search for life.";