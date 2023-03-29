/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    let score_a = 0; 
    let score_b = 0;
    for (let i = 0; i < 3; i++){
            if(a[i] < b[i]) {
                score_b++;
            } else if (a[i] === b[i]){
                score_a += 0;
                score_b += 0;
            } else  score_a++;
        }
         return [score_a, score_b];
    } 
   