angular
  .module('mode')
  .controller('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject = ['User', '$stateParams'];
function usersShowCtrl(User, $stateParams) {
  const vm = this;

  User.get($stateParams, data => {
    vm.user = data.user
  });
}
