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








