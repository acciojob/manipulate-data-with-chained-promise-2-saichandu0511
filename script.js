//your JS code here. If required.
let output = document.getElementById("output");

function wait(ms){
	return new promise(function(resolve){
		setTimeout(resolve,ms);
	});
}

function manipulateArray() {
    let arr = [1, 2, 3, 4];

    return wait(3000)
        .then(function() {
            return arr;
        })
        .then(function(arr) {
            let evenNumbers = arr.filter(function(num) {
                return num % 2 === 0;
            });

            return wait(1000).then(function() {
                output.textContent = evenNumbers;
                return evenNumbers;
            });
        })
        .then(function(evenNumbers) {
            let doubledNumbers = evenNumbers.map(function(num) {
                return num * 2;
            });

            return wait(2000).then(function() {
                output.textContent = doubledNumbers;
            });
        });
}

manipulateArray();