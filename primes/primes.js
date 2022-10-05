function primeFactors(ofThisNumber) {
  if (isPrime(ofThisNumber)) return `${ofThisNumber} is a prime number.`;
  const potentialFactors = returnPrimeArray(Math.sqrt(ofThisNumber));
  const factors = {};

  for (let prime of potentialFactors)
    while (ofThisNumber % prime === 0) {
      if (!Object.keys(factors).includes(prime.toString())) factors[prime] = 1;
      else factors[prime] += 1;
      ofThisNumber /= prime;
    }
  if (ofThisNumber > 1) factors[ofThisNumber] = 1;

  let returnValue = "";
  for (let [key, value] of Object.entries(factors))
    if (value === 1) returnValue += ` ${key}`;
    else returnValue += ` ${key}^${value}`;

  return returnValue.trim().split(" ").join(" x ");
}

function returnPrimeArray(untilThisNumber) {
  if (untilThisNumber <= 1) return [];
  const primes = [2];
  if (untilThisNumber === 2) return primes;
  for (let i = 3; i <= untilThisNumber; i += 2) if (isPrime(i)) primes.push(i);
  return primes;
}

function isPrime(integer) {
  if (integer <= 1 || (integer > 2 && integer % 2 === 0)) return false;
  if (integer === 2) return true;

  const maxRange = Math.floor(Math.sqrt(integer));
  for (let i = 3; i <= maxRange; i += 2) if (integer % i === 0) return false;
  return true;
}

console.log(primeFactors(106545645640));
