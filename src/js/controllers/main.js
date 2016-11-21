angular
.module("mode")
.controller("mainCtrl", mainCtrl);

mainCtrl.$inject = ["$rootScope", "CurrentUserService", "$state"];
function mainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  vm.user = CurrentUserService.getUser();

  vm.logout = () => {
    event.preventDefault();
    CurrentUserService.clearUser();
  };

  $rootScope.$on("loggedIn", () => {
    vm.user = CurrentUserService.getUser();
    $state.go("usersShow", { id: vm.user._id });
  });

  $rootScope.$on("loggedOut", () => {
    vm.user = null;
    $state.go("home");
  });

  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });
}
