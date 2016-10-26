angular
.module("mode")
.config(Router);

Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "/js/views/home.html",
  })
  .state("register", {
    url: "/register",
    templateUrl: "/js/views/register.html",
    controller: "registerCtrl as register",
  })
  .state("login", {
    url: "/login",
    templateUrl: "/js/views/login.html",
    controller: "loginCtrl as login",
  })
  .state("usersShow", {
    url: "/users/:id",
    templateUrl:  "/js/views/users/show.html",
    controller:   "usersShowCtrl as usersShow",
  })
  .state("itemsIndex", {
    url: "/items",
    templateUrl:  "/js/views/items/index.html",
    controller:   "itemsIndexCtrl as itemsIndex",
  })
  .state("itemsEdit",      {
    url: "/items/:id/edit",
    templateUrl:  "/js/views/items/edit.html",
    controller:   "itemsEditCtrl as itemsEdit",
  })
  .state('itemsNew', {
    url: "/items/new",
    templateUrl: "/js/views/items/new.html",
    controller: "itemsNewCtrl as itemsNew"
  })
  .state('itemsShow', {
    url: "/items/:id",
    templateUrl: "/js/views/items/show.html",
    controller: "itemsShowCtrl as itemsShow"
  })
  .state("outfitsIndex", {
    url: "/outfits",
    templateUrl:  "/js/views/outfits/index.html",
    controller:   "outfitsIndexCtrl as outfitsIndex",
  })
  .state('outfitsNew', {
    url: "/outfits/new",
    templateUrl: "/js/views/outfits/new.html",
    controller: "outfitsNewCtrl as outfitsNew"
  })
  .state('outfitsShow', {
    url: "/outfits/:id",
    templateUrl: "/js/views/outfits/show.html",
    controller: "outfitsShowCtrl as outfitsShow"
  });

  $urlRouterProvider.otherwise("/");
}
