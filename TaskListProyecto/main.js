const app = new Vue({
	el: '#main',
	data: {
		lists: [],
		name: '',
	},
	methods: {
		addKeep: function() {
			this.lists.push({keep: this.name, completed: false});
			this.name= '';
		}
	}
});
const app = new Vue({
	el: '#app-main',
	data: {
		users: [],
		products: [],
		name: '',
	},
	methods: {
		addProduct: function() {
			this.products.push({
				id: Math.random(); 
			});
		},
		editProduct: function(id) {
			
		},
		deleteProduct: function(id) {

		},
		searchProduct:  function(id) {

		}
	}
	
});








