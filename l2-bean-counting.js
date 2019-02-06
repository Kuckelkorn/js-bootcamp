function countBs(woord){
  var count =0;
  for (var i=0; i<woord.length; i++){
    if (woord.charAt(i)==="B") {
      count++;
    }
  }
  return count;
}

function countChar(woord, letter){
 var count =0;
 for (var i=0; i<woord.length; i++){
   if (woord.charAt(i)===letter){

     count++
   }
 }
 return count;
}



console.log(countBs("BluBBer"));
console.log(countChar("kakkerlak", "k"));
