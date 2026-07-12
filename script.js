'use strict';

const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]); // Number of games (not actually needed)
const s = input[1];          // String containing A and D

let anton = 0;
let danik = 0;

// Count wins
for (const ch of s) {
    if (ch === 'A') {
        anton++;
    } else {
        danik++;
    }
}

// Compare counts and print the result
if (anton > danik) {
    console.log('Anton');
} else if (danik > anton) {
    console.log('Danik');
} else {
    console.log('Friendship');
}
