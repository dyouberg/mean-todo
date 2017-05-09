angular.module('todoService', [])

	// super simple service
	// each function returns a promise object
	.factory('Todos', ['$http',function($http) {
		return {
			get : function(id) {
				// If we pass in an item's id into the request URL, we should get all
				// properties for that todo and load onto the new page.  Otherwise, we
				// are at our home screen, so just show the list of todos.
				if (id) {
					return $http.get('/api/todos/' + id);
				} else {
					return $http.get('/api/todos/');
				}
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			// To do an update, we need to pass the id into the URL.
			// For instance: localhost:8080/api/todos/5908c2c403edbc18ccfa3fc1
			// To pass the data, we use the request body
			// Our todoData should look like this:
			// { description : "New Description" }
			update : function(id, todoData) {
				return $http.put('/api/todos/' + id, todoData)
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	}]);
