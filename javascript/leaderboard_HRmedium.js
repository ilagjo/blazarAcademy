function climbingLeaderboard(ranked, player) {
    
    const scores = [ranked[0]];
    const ranks = [1];
    for (let i = 1; i < ranked.length; i++) {
      if (ranked[i] !== ranked[i-1]) {
        scores.push(ranked[i]);
        ranks.push(ranks[ranks.length-1]+1);
      }
    }
    
    
    const result = [];
    for (let score of player) {
      const rank = binarySearch(scores, score);
      result.push(rank);
    }
    return result;
  }
  
  function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === val) {
        return mid + 1;
      } else if (arr[mid] < val) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left + 1;
  }