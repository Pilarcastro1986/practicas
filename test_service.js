angular
	.module('app' , [])
	.controller('Client', function(clientService){
		//this.nombre = 'Pilar'
		clientService.getClients().then(function(response) {
	        vm.clientName = response.data.records[0].Name;
	        console.log(vm.clientName);
    		});
	})
	.service('clientService', function($http){
		this.getClients = function(){
			//return 'Francis'
			var vm = this;
			return $http.get('https://www.w3schools.com/angular/customers.php')

		}
		
		})


	

