/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
	let higestTotal = 0
	let arrayOfTotals = []
	for(let i = 0; i < accounts.length; i++) {
		arrayOfTotals.push(accounts[i].reduce((a,b) => a+b))
		higestTotal = Math.max(...arrayOfTotals)
	}
return higestTotal
};