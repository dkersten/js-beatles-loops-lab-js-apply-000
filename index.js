// add solution here

function theBeatlesPlay(arrayM, arrayI) {
  var emptArray = [];
   for ( var i = 0; i < arrayM.length; i++) {
     emptArray.push(`${arrayM[i]} plays ${arrayI[i]}`);
   }
   return emptArray;
}

theBeatlesPlay(musicians, instruments);


