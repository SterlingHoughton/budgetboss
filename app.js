// BUDGET CONTROLLER
var budgetController = (function() {
	
	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	};

	return {
		addItem: function(type, des, val) {
			var newItem, ID;

			// Create new ID
			if (data.allItems[type].length > 0) {
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			} else {
				ID = 0;
			}

			// Create new item based on 'exp' or 'exp' type
			if (type === 'exp') {
				newItem = new Expense(ID, des, val);
			} else if (type === 'inc') {
				newItem = new Income(ID, des, val);
			}

			// Push new item into data structure 
			data.allItems[type].push(newItem);

			// Return the new element
			return newItem;
		}
	};

})();

// UI CONTROLLER
var UIController = (function() {

	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	};

	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value
			};
		},

		getDOMstrings: function() {
			return DOMstrings;
		}
	};


})();

// GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

	var setupEventListeners = function() {
		var DOM = UICtrl.getDOMstrings();

		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event) {
			if(event.keycode === 13 || event.which === 13) {
				ctrlAddItem() ;
			}
		});
	};

	var ctrlAddItem = function() {
		var input, newItem;

		// Get the field input data
		input = UICtrl.getInput();
		
		// Add item to budget controller
		newItem = budgetCtrl.addItem(input.type, input.description, input.value);
	};

	return {
		init: function() {
			console.log('App Started.');
			setupEventListeners();
		}
	};

})(budgetController, UIController);

controller.init();