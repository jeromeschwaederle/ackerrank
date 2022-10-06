const [n, a, b] = "73 25 25".split(" ");

function stones(n, a, b) {
  const cases = [];

  let numOfA = n - 1;
  let numOfB = 0;

  while (numOfA >= 0) {
    const numberToAdd = numOfA * a + numOfB * b;
    cases.push(numberToAdd);
    numOfA--;
    numOfB++;
  }

  const set = new Set([...cases.sort((a, b) => a - b)]);
  return [...set];
}

console.log(stones(n, a, b));

console.log(
  "6642 6647 6652 6657 6662 6667 6672 6677 6682 6687 6692 6697 6702 6707 6712 6717 6722 6727 6732 6737 6742 6747 6752 6757 6762 6767 6772 6777 6782 6787 6792 6797 6802 6807 6812 6817 6822 6827 6832 6837 6842 6847 6852 6857 6862 6867 6872 6877 6882 6887 6892 6897 6902 6907 6912 6917 6922 6927 6932 6937 6942 6947 6952 6957 6962 6967 6972 6977 6982 6987 6992 6997 7002 7007 7012 7017 7022 7027 7032 7037 7042 7047 7052".split(
    " "
  ).length
);
