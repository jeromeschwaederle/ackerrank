const gridChallenge = grid => {
  const sortedRows = grid.map(row => row.split("").sort());
  for (let x = 0; x < grid[0].length; x++)
    for (let y = 1; y < grid.length; y++) if (sortedRows[y][x] < sortedRows[y - 1][x]) return "NO";
  return "YES";
};
