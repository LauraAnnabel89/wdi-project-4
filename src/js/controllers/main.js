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

  // function clickSet() {
  //  circularnav.classList.toggle("closed")
  //  circularnav.classList.toggle("clicked");
  //   if (circularnav.classList.contains("closed")) {
  //     // freshly closed button
  //     var pseudoBefore = window.getComputedStyle(
  // document.querySelector('.ss-icon'), ':before'
  // ).animation
  //   }
  // }
  //
  // var circularnav = document.getElementsByClassName("ss-icon")[0];
  // circularnav.addEventListener("click", clickSet, false);
  //
  // circularnav.addEventListener("keydown", function (e) {
  //     if (e.keyCode === 13) {
  //         clickSet();
  //     }
  // });
}
