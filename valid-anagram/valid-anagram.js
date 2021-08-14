/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
        // if s & t are not the same length: return false
	if(s.length !== t.length) {
		return false
	}
	// Set the FreqCounterObjs 
	let freqCount1 = {}
	let freqCount2 = {}

    // Loop through the characters in s
	for(let char of s) {
	    // set The character as the key, and its value how many times it appears add 1 or if not 0
		freqCount1[char] = (freqCount1[char] || 0) + 1
	}

	// Loop hrough the characters in t
	for(let char of t) {
	    // set The character as the key, and its value how many times it appears add 1 if it does or if not 0
		freqCount2[char] = (freqCount2[char] || 0) + 1
	}
	// Loop over the keys in FreqCount1 
	for(let key in freqCount1) {
	    // if the key does not exist in FreqCount2 return false
		if(!(key in freqCount2)) {
			return false 
		}
		// if the key in FreqCount1 does not exist in FreqCount1 return false
		if(freqCount2[key] !== freqCount1[key]) {
			return false
		}
	}
	console.log("1:" ,freqCount1)
	console.log("2:" ,freqCount2)
	//return true if the cases above arent hit
	return true
};