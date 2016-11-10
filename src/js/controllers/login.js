angular
  .module("mode")
  .controller("loginCtrl", loginCtrl);

loginCtrl.$inject = ["User", "CurrentUserService"];
function loginCtrl(User, CurrentUserService) {
    $("body").css("background-image", "");
  const vm = this;
  vm.login = () => {
    User
      .login(vm.user)
      .$promise
      .then(data => {
        const user = data.user ? data.user : null;
        if (user) {
          CurrentUserService.saveUser(user);
        }
      });
  };
}
