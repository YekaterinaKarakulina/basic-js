module.exports = function countCats(backyard) {
  var catsAmount = 0;
  if(backyard.length != 0) {
    for(var i=0; i<backyard.length; i++) {
      for(var j=0; j<backyard[i].length; j++) {
        if(backyard[i][j]==='^^') {
          catsAmount++;
        }
      } 
    }
    return catsAmount; 
  } else {
    return catsAmount;
  }
};