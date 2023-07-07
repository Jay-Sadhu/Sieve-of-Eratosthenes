/* Question - Find out all prime numbers up to length 6, that are prime even 
              when reversed.
*/

// Answer :

/** Reverses a given number.
* @param {Number} number - The number to be reversed.
* @returns {Number} - The reversed number.
*/
function reverseNumber(number) {
    return parseInt(number.toString().split('').reverse().join(''));
}

/** Finds prime reversed numbers within a given limit.
* @returns {Array} An array of prime reversed numbers.
*/
function findPrimeReversedNumbers() {
    // Array to store prime numbers.
    const primes = [];

    // Upper limit for prime numbers.
    const limit = 999999;

    // Sieve of Eratosthenes algorithm to find prime numbers.
    const sieve = Array(limit + 1).fill(true);

    // Setting up 0 and 1 as non-prime.
    sieve[0] = false;
    sieve[1] = false;

    // Iterates through numbers from 2 to the limit.
    for (let i = 2; i <= limit; i++) {

        // for each of the current number which is prime.
        if (sieve[i]) {

            // Marks all multiples of i as non-prime.
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false;
            }

            // Checks if the reverse of the number is also prime.
            if (sieve[reverseNumber(i)]) {
                primes.push(i);
            }
        }
    }
    // Returns the array of prime reversed numbers.
    return primes;
}

/** The main function is the entry point of the program. It calculates the time 
 * taken to find prime numbers that remain prime when reversed.
*/
function main() {
    // Getting the current timestamp before finding prime reversed numbers.
    const t0 = Date.now();

    // Finding prime reversed numbers
    const primeReversedNumbers = findPrimeReversedNumbers();

    // Getting the current timestamp after finding prime reversed numbers.
    const t1 = Date.now();

    // Printing the prime numbers that remain prime when reversed.
    console.log("Prime numbers that remain prime when reversed:");
    console.log(primeReversedNumbers);

    // Printing the time taken to find prime reversed numbers.
    console.log("Time elapsed: ", t1 - t0);
}

// calling the testing function.
main()
