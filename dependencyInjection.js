// AngularJS dependency injection

// AngularJS is made up of objects like Directives, Services, 
// and Controllers communicating with each other.

// Dependency Injection is used to have an efficient 
// communication between these objects. 


// WHAT IS DEPENDENCY INJECTION ?

	// Dependency Injection (DI) is a technique whereby one 
	// object supplies the dependencies of another object.
	
		// 1. A dependency is an object that can be 
		// 	used(say, a service)

		// 2. An injection is the passing of a dependency to a 
		// 	dependent object (say, a client) that would use it. 
		// 	The service is made part of the client's state.

		// 3. Passing the service to the client, rather than allowing 
		// 	a client to build or find the service, is the fundamental
		// 	requirement of dependency injection.

		// 4. The intent behind dependency injection is to decouple objects
		// 	to the extent that no client code has to be changed, simply 
		// 	because an object it depends on needs to be changed to a 
		// 	different one.
		
// DI explained

// Let us look at an example.
	// <html ng-app>
	// 	<head>
	// 		<script src="angular.min.js" type="text/javascript"></script>
	// 	</head>
	// 	<body ng-controller="UserController">
	// 		{{Name}}
	// 	</body>
	// </html>


	// function UserController($scope) {
	// 	$scope.currentUser = {
	// 		Name: "John"
	// 	}
	// }

	// Whenever UserController is instantiated, $scope gets injected
	// as a dependency by AngularJS. The controller does not care how 
	// this object is created. It only knows the contract provided by 
	// this object and how to consume it.

	// This approach allows to focus on testing only one particular 
	// piece of functionality - one unit - instead of testing all the 
	// underlying services as well.


// Benefits of Dependency Injection

// 1. Seperates the process of creation and consumption 
// 	of dependencies.

// 2. Lets the consumer / client worry only about how to 
// 	use the dependency, and leave the proces  of 
// 	creation of the dependency to somebody else.

// 3. Allows concurrent / independent development of the 
// 	dependency and the dependent entity, while only 
// 	maintaining a known contract.

// 4. Facilitates changing of the dependencies when needed.

// 5. Allows injecting mock objects as dependencies for testing,
// 	by maintaining the agreed contract.


// $Injector and $Provide

// Angular has two important components that makes dependency 
// injection possible - $injector and $provide.

// Consider the following code snippet to understand about these 
// components.

// myMod.config(function($provide) {
// 	$provide.provider('greeting', function() {
// 		this.$get = function() {
// 			return function(name) {
// 				alert("Hello, " + name);
// 			}
// 		}
// 	})
// }) 

// var greeting = $injector.get('greeting');
// greeting('Ford Perfect');

// 	$injector - is responsible for identifying and retrieving 
// 	the dependencies as defined by the provider. It creates an 
// 	instance of the provider.

// 	$provide - Has the knowledge of how to create the 
// 	dependencies to be injected. It is responsible for 
// 	telling Angular how to create new injectable things 
// 	called service.

// 	In the above example, we can inject a variable named 
// 	greeting into any injectable function like controller,
// 	directive, service. Here name is the injectable parameter.

