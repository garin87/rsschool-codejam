
module.exports = function sumOfOther(arr){
	if(!Array.isArray(arr)) throw Error('Invalid argument');
	const sum = (accumulator, currentValue) => accumulator + currentValue; 
	let sumOther = arr.map(function(num) {
		return arr.reduce(sum) - num;
	});
	return sumOther;
}
