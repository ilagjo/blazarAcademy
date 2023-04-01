/* The function is expected to return an INTEGER.
/* The function accepts INTEGER_ARRAY ar as parameter.
*/

function simpleArraySum(ar) {
  // Write your code here
  var result = 0;
  for (let i = 0; i < ar.length; i++) {
    result += ar[i];
  }
  return result;
}
