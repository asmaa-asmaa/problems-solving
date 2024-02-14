function convert(n) {

    // let strg=n.toString();

    // // let array=Array.from(strg).reverse();
    // let array=strg.split("").reverse();


    // final=array.map((x)=> parseInt(x) );

    // // final=array.map((x)=> +x);

    // return final;

   return n.toString().split("").map((x)=>+x).reverse();



  /* let strg=n.toString();
   let arr=[...strg].reverse();
   return arr; */

    /* let strg=n.toString();
     let emptyArray=[];

     for(let i=0; i<strg.length; i++) {

         emptyArray.push(parseInt(strg[i]));
     }

     return emptyArray.reverse();*/


    /* let strg=n.toString();
     let emptyArray=[];

     for(let i=0; i<strg.length; i++) {

         emptyArray.unshift(+strg[i])
     }

     return emptyArray;*/

}




console.log(convert(564987654));
console.log(convert(529132));

