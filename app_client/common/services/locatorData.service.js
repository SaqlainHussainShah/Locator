(function(){

angular
	.module('locatorApp')
	.service('locatorData', locatorData);

locatorData.$inject=['$http'];
function locatorData($http){
	var locationByCoords=function(lat,lng){
		return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=388933184558');
	};
	return{
		locationByCoords : locationByCoords
	};
}

})();