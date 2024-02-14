function removeCharFrom(word, c) {
    

   return  word.split("").filter((ch)=> ch!==c.toLowerCase() && ch!==c.toUpperCase()).join("");



//return word.replace( /d/gi,""); ... example


    
}



console.log(removeCharFrom("ElddzeroD WebDD ddSchool", "d"));

console.log(removeCharFrom("ElxzeroX Web Sxchool", "x"));

console.log(removeCharFrom("Elzero@ Web@@  @@School", "@"));