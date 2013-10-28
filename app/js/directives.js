angular.module('components', [])
	.directive('carouselV2', function() {
	return {
		restrict: 'E',
		template: '<span>Hallo jonathan!!!</span>'
	}	
})



/*angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);*/
