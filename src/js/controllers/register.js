angular
  .module("mode")
  .controller("registerCtrl", registerCtrl);

registerCtrl.$inject = ["User", "CurrentUserService"];
function registerCtrl(User, CurrentUserService){
    $("body").css("background-image", "");
  const vm    = this;
  vm.register = () => {
    User
      .register({ user: vm.user })
      .$promise
      .then(data => {
        const user = data.user ? data.user : null;
        if (user) {
          CurrentUserService.saveUser(user);
        }
      });
  };
}
