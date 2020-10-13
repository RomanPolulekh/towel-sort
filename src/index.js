
module.exports = function towelSort (matrix) {
 
  let result=[];
  if(matrix===undefined) return result;
  let count=0;
  for(let i=0; i<matrix.length;i++)
  {
    if(i%2==1){
    for(let n=matrix[i].length-1; n>=0;n--)
    {
      result.push(matrix[i][n]);
    }
  } 
  if(i%2==0){
  for(let n=0; n<matrix[i].length;n++)
    {
      result.push(matrix[i][n]);
    }
  }
}
  return result;
}
