function removeDuplicateWordsFrom(sentence) {

    let wordsList=sentence.split(" ");

    /*let result= [];

    for(let i=0; i<wordsList.length; i++) {
        if(result.indexOf(wordsList[i])=== -1) {
             result.push(wordsList[i]);
        }
    }

    return result.join(" ");*/


    /*let fin= new Set(wordsList);
    let arr=Array.from(fin).join(" ");
    return arr*/

    return [...new Set(sentence.split(" "))].join(" ");
}

console.log(removeDuplicateWordsFrom("hello elzero web web hello school"));