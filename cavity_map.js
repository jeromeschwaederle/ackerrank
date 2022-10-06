const grid = ["1112", "1912", "1892", "1234"];

function cavityMap(grid) {
  const myGrid = [...grid].map(row => row.split(""));
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid.length - 1; j++) {
      const here = grid[i][j];
      const up = grid[i - 1][j];
      const down = grid[i + 1][j];
      const left = grid[i][j - 1];
      const right = grid[i][j + 1];
      const isCavity = here > up && here > down && here > left && here > right;
      if (isCavity) myGrid[i][j] = "X";
    }
  }
  return myGrid.map(row => row.join(""));
}

console.log(cavityMap(grid));
