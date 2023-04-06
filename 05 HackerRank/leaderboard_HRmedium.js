/* Medium difficulty LEADERBOARD https://www.hackerrank.com/challenges/climbing-the-leaderboard?isFullScreen=true */

function climbingLeaderboard(ranked, player) {
  const uniqueScores = [...new Set(ranked)];
  const playerRankings = player.map(score => {
    uniqueScores.push(score);
    uniqueScores.sort((a, b) => b - a);
    const rank = uniqueScores.indexOf(score) + 1;
    uniqueScores.splice(rank - 1, 1);
    return rank;
  });
  return playerRankings;
}

