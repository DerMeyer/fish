// document.body.removeChild(fishOne);

var fishOne = document.getElementById('one');
var fishTwo = document.getElementById('two');
var fishThree = document.getElementById('three');
var fishFour = document.getElementById('four');
var fishFive = document.getElementById('five');
var fishSix = document.getElementById('six');
var fishSeven = document.getElementById('seven');
var fishOutlier = document.getElementById('outlier');

var leftOne = fishOne.offsetLeft;
var leftTwo = fishTwo.offsetLeft;
var leftThree = fishThree.offsetLeft;
var leftFour = fishFour.offsetLeft;
var leftFive = fishFive.offsetLeft;
var leftSix = fishSix.offsetLeft;
var leftSeven = fishSeven.offsetLeft;
var leftOutlier = fishOutlier.offsetLeft;

var a = 1;
var b = 1;
var c = 1;
var d = 1;
var e = 1;
var f = 1;
var g = 1;
var h = 1;

function move() {
    leftOne -= a;
    leftTwo -= b;
    leftThree -= c;
    leftFour -= d;
    leftFive -= e;
    leftSix -= f;
    leftSeven -= g;
    leftOutlier += h;
    fishOne.style.left = leftOne + 'px';
    fishTwo.style.left = leftTwo  + 'px';
    fishThree.style.left = leftThree  + 'px';
    fishFour.style.left = leftFour  + 'px';
    fishFive.style.left = leftFive  + 'px';
    fishSix.style.left = leftSix  + 'px';
    fishSeven.style.left = leftSeven  + 'px';
    fishOutlier.style.left = leftOutlier + 'px';
    if (fishOne.offsetLeft < -250) {
        leftOne = window.innerWidth;
        a = Math.ceil(Math.random() * 2);
    }
    if (fishTwo.offsetLeft < -250) {
        leftTwo = window.innerWidth;
        b = Math.ceil(Math.random() * 2);
    }
    if (fishThree.offsetLeft < -250) {
        leftThree = window.innerWidth;
        c = Math.ceil(Math.random() * 2);
    }
    if (fishFour.offsetLeft < -250) {
        leftFour = window.innerWidth;
        d = Math.ceil(Math.random() * 2);
    }
    if (fishFive.offsetLeft < -250) {
        leftFive = window.innerWidth;
        e = Math.ceil(Math.random() * 2);
    }
    if (fishSix.offsetLeft < -250) {
        leftSix = window.innerWidth;
        f = Math.ceil(Math.random() * 2);
    }
    if (fishSeven.offsetLeft < -250) {
        leftSeven = window.innerWidth;
        g = Math.ceil(Math.random() * 2);
    }
    if (fishOutlier.offsetLeft > window.innerWidth + 50) {
        leftOutlier = -250;
        h = Math.ceil(Math.random() * 2);
        fishOutlier.style.top = Math.floor(Math.random() * 800) + 'px';
    }
    requestAnimationFrame(move);
}

move();
