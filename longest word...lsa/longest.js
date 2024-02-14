
function longestWordIn(sentence){

//     let splArray= sentence.split(" ");
//     let longestLength=0;
//     let longestWord;

//     for(let i=0; i<splArray.length; i++) {
//         if(splArray[i].length > longestLength) {
//             longestLength=splArray[i].length;
//             longestWord=splArray[i];
//         }
//     }

//     return longestWord;
// 

    
    // let longestWord=sentence.split(" ").reduce(function(longest, current){
    //     return current.length>longest.length?current:longest;
        
    // });
    // return longestWord;

    let longestWord=sentence.split(" ").reduce((longest, current)=> current.length>longest.length?current:longest);
    return longestWord;
}

console.log(longestWordIn("In Programming We Love Elzero Academy Tooooooooooo Much"));