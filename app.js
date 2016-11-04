// BUDGET CONTROLLER
var budgetController = (function() {
	
})();

// UI CONTROLLER
var UIController = (function() {

	
})();

// GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

	var ctrlAddItem = function() {

		console.log('it works')
	}

	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function(event) {
		if(event.keycode === 13 || event.which === 13) {
			ctrlAddItem();
		}
	});

})(budgetController, UIController);