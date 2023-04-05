(function(){

	// selecting my dom elements
	let screen = document.querySelector('.screen')
	let numbers = document.querySelectorAll('.button-number')
	let operators = document.querySelectorAll('.btn-operator')
	let equals = document.querySelector('.button-equals')
	let clear = document.querySelector('.button-clear')

	// writing the clicked nummber to the screen
	numbers.forEach(function(button){
		button.addEventListener('click', function(e){
			let value = e.target.dataset.num;
			screen.value += value;
		})
	})

	// writing the clicked operator to the screen
	operators.forEach(function(button){
		button.addEventListener('click', function(e){
			let value = e.target.dataset.num;
			screen.value += value;
		})
	})

	// evaluating the on screen equation
	equals.addEventListener('click', function(e){
		if(screen.value === ''){
			screen.value = ''
		}
		else{
			let answer = eval(screen.value)
			screen.value = answer
		}
	})

	// clearing the on screen data
	clear.addEventListener('click', function(e){
		screen.value = ''
	})


})();