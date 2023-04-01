/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    // Percorre la scala dal livello 1 al livello n
    // ed esegue due cicli for per ognuno
  for (let i = 1; i <= n; i++) {
    var stair = '';
    
    // Aggiunge spazi vuoti per allineare la scala
    for (let j = 1; j <= n - i; j++) {
      stair += ' ';
    }
    
    // Aggiunge i simboli # in quantità diversa per ogni livello
    for (let k = 1; k <= i; k++) {
      stair += '#';
    }
    
    // Stampa la riga che risulta da ogni iterazione
    console.log(stair);
  }
}