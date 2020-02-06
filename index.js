// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(arrayM, arrayI) {
  var emptArray;
   for ( var i = 0; i < arrayM.length; i++) {
     emptArray.push(`${arrayM[i]} plays ${arrayI[i]}`);
   }
   return emptArray;
}

theBeatlesPlay(musicians, instruments);


