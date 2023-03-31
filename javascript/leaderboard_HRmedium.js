/* Medium difficulty LEADERBOARD
https://www.hackerrank.com/challenges/climbing-the-leaderboard?isFullScreen=true */

function climbingLeaderboard(ranked, player) {
  // Build a new array of unique scores with their rank
  const scores = [ranked[0], ...ranked.filter((val, idx) => val !== ranked[idx-1]).slice(1)];
  const ranks = scores.reduce((acc, val, idx) => [...acc, (idx === 0 || val !== scores[idx-1]) ? acc[idx]+1 : acc[idx]], [1]);
  
  // Find the rank for each player's score
  return player.map(score => ranks.findIndex(rank => score >= rank) + 1);
}