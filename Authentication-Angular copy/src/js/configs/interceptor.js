angular
  .module("mode")
  .config(setUpInterceptor);

setUpInterceptor.$inject = ["$httpProvider"];
function setUpInterceptor($httpProvider){
  return $httpProvider.interceptors.push("AuthInterceptor");
}
