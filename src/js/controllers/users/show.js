angular
  .module('mode')
  .controller('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject = ['User', '$stateParams'];
function usersShowCtrl(User, $stateParams) {
    $("body").css("background-image", "url('../main6.jpg')");
  const vm = this;

  User.get($stateParams, data => {
    vm.user = data.user
  });
}
