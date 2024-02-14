function addCommasAndUnderscore(num) {

    let str= num.toLocaleString();

     result=str.split("");
     result[result.length- 4] ="_";

     return result.join("")




    

    

}

console.log(addCommasAndUnderscore(120));
console.log(addCommasAndUnderscore(1530));
console.log(addCommasAndUnderscore(120510650));
console.log(addCommasAndUnderscore(510650480910));
console.log(addCommasAndUnderscore(12051065032032));