// Step 1
var input = 'Sing your whale song!';

// Step 2
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Step 3
var resultArray = [];

// Step 4, 5, 6, 7, 8, 9, 10, 11
for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    // console.log(i, letter);      ** Returns 20

    if (letter === 'e') {
        resultArray.push(letter);
    } else if (letter === 'u') {
        resultArray.push(letter);
    } else {
        null;
    }

    for (let j = 0; j < vowels.length; j++) {
        const vowel = vowels[j];
        // console.log(j, vowel)        ** Returns 0-4 repeatedly
        
        if (letter === vowel) {
            resultArray.push(vowel);
            }
        }
    }

// Step 12
// console.log(resultArray);

// Step 13
var resultString = resultArray.join('').toUpperCase();
console.log(resultString);
