
function sumOfOther(arr){
	const sum = (accumulator, currentValue) => accumulator + currentValue; 
	let sumOther = arr.map(function(num) {
		return arr.reduce(sum) - num;
	});
	return sumOther;
}
