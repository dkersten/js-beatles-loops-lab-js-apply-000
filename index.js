// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(mus, inst) {
  var emptArray;
   for (i = 0; i < mus.length; i++) {
     emptArray = `${mus[i]} plays ${inst[i]}. `;
   }
   return emptArray;
}

theBeatlesPlay(musicians, instruments);


