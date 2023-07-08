/* Question - Take this number 345456. Each pair of consecutive digits of 
              345456 has a difference of one. Let's call these numbers 
	      one-digit-difference numbers. Or ODD numbers. How many such 
              numbers are prime between 0 and 10 million.
*/

// Answer :

/** Returns an array of boolean values indicating whether each number from 0 to 
 * the input limit is prime or not.The algorithm used is the Sieve of 
 * Eratosthenes, which is a simple and efficient way to find all prime numbers 
 * up to a given limit.
 * @param {Number} limit - The maximum number to check for primality.
 * @returns {Boolean[]} - An array of boolean values, where true indicates 
 *                        that the corresponding number is prime and false 
 *                        indicates that it is not.
 */
function sieveOfEratosthenes(limit) { 

	// Creating a sieve array of size limit+1 and initialize all values to true.
	const sieve = Array(limit + 1).fill(true);
	
	// Seting up the values at index 0 and 1 to false as they are not prime.
	sieve[0] = false;
	sieve[1] = false;

	// Iterates from 2 to the square root of the limit.
	for (let i = 2; i * i <= limit; i++) {

		// For each of the current prime number.
		if (sieve[i]) {

			// Mark all multiples of i as non-prime.
			for (let j = i * i; j <= limit; j += i) {
				sieve[j] = false;
			}
		}
	}

	// Returns the sieve array.
	return sieve;
}

/** Checks if a given number has at least one digit that differs by exactly one 
 * from its adjacent digit.
 * @param {Number} cout - The number to be checked.
 * @returns {Boolean} - True if the number has at least one digit that differs 
 *                      by exactly one from its adjacent digit, false otherwise.
 */
function isOneDigitDifferenceNumber(cout) {
	// converts the number to string and splits into array of individual digits.
	const digits = String(cout).split('')
	
	// Iterates through the array, comparing each digit with the next digit.
	for (let i = 0; i < digits.length - 1; i++) {

		// If the absolute difference between two consecutive digits is not 
		// equal to 1, the function returns false.
		if (Math.abs(digits[i] - digits[i + 1]) != 1) {
			return false
		}
	}

	// If all the digit differences are equal to 1, the function returns true.
	return true
}

/** Counts the number of prime numbers with ODD difference between them and 0.
* @param {Number} end - The upper limit for the range of numbers to check.
* @returns {Number} The number of prime numbers with one digit difference.
*/
function countPrimeOneDigitDifferenceNumbers(end) {
	// Generates an array of prime numbers up to the given end value.
	const primeArray = sieveOfEratosthenes(end);

	// Initializing the count as 1 for 0.
	let count = 1

	// Iterating through odd numbers starting from 3 up to the given end value.
	for (let i = 3; i < end; i += 2) {

		// Checking if the number is prime and has a one-digit difference.
		if (primeArray[i] && isOneDigitDifferenceNumber(i))
			count++;
	}

	// Returns the count of prime numbers with a one-digit difference.
	return count;
}


/** The main function calculates the total number of prime and odd numbers 
 * that have a one-digit difference from 1 to the given end value.
 */
function main() {
	// Sets the end value to 10,000,000.
	const end = 10000000;

	// Gets the current timestamp in milliseconds.
	const t0 = Date.now();

	// Calling the countPrimeOneDigitDifferenceNumbers function to calculate 
	// the count.
	const count = countPrimeOneDigitDifferenceNumbers(end);

	// Gets the current timestamp in milliseconds after the calculation.
	const t1 = Date.now();

	// Printing the total number of prime and odd numbers.
	console.log('Total Number of Prime and ODD numbers', count);

	// Printing the time elapsed during the calculation.
	console.log('Time elapsed: ', t1 - t0);
}

// calling the testing function.
main()
