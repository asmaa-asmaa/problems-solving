function findMissingLetterIn(givenLetters){
    let alpha="abcdefghijklmnopqrstuwxyz";
    let start=alpha.indexOf(givenLetters[0]);

    for(let i=0; i<givenLetters.length; i++) {
       // console.log(alpha[start + i]);
        //console.log(givenLetters[i]);

        if(givenLetters[i] !== alpha[start + i]) {
            return alpha[start + i];
        }


    }
    return"no missing letter in sequence";

}

console.log(findMissingLetterIn("defgi"));
console.log(findMissingLetterIn("abcdeghi"));
console.log(findMissingLetterIn("xyz"));