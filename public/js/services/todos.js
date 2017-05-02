angular.module('todoService', [])

	// super simple service
	// each function returns a promise object
	.factory('Todos', ['$http',function($http) {
		return {
			get : function(id) {
				if (id) {
					return $http.get('/api/todos/' + id);
				} else {
					return $http.get('/api/todos/');
				}
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			update : function(id, todoData) {
				return $http.put('/api/todos/' + id, todoData)
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	}]);
