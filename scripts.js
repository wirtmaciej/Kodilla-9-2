var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian'

if (allNames.indexOf(newName) === -1) {
	var x = allNames.push(newName);
} else {
	console.log('You can not add this name to the data set')
}

console.log(allNames);
