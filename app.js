'use strict';
var vegan = prompt('Do you think Ryan is vegan?');
console.log('My answer is ', vegan);
if (vegan.trim().toLowerCase() == 'no') {
    alert('You are correct!');
} else {
    alert('You dont know his life!');
}
var siblings = prompt('Does Ryan have siblings?');
console.log('My answer is', siblings);
if (siblings.trim().toLowerCase() == 'yes') {
    alert('Close but no cigar!');
} else {
    alert('You are correct!');
}
var children = prompt('Does Ryan have children?');
console.log('My answer is', children);
if (children.trim().toLowerCase() == 'yes') {
    alert('You dont know him well!');
} else {
    alert('You remembered!');
}
var music = prompt('Does Ryan love music?');
console.log('my answer is', music);
if (music.trim().toLowerCase() == 'yes') {
    alert('In fact, music is his life!');
} else {
    alert('Everybody loves music!');
}
var coding = prompt('Is Ryan sufficient at coding?');
console.log('my answer is', coding);
if (coding.trim().toLowerCase() == 'yes') {
    alert('You are absolutely correct.');
} else {
    alert('Incorrect, better than you!');
}
