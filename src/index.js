
// You should implement your task here.

module.exports = 
function towelSort (matrix) {
  if(matrix) {
    return matrix.map((value,index) => {
      if(index % 2 !== 0) {
        value = value.reverse();
      }
      return value;
    })
      .flat();
  } else {
    return [];
  } 
    
}