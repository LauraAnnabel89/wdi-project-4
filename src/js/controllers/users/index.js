angular
  .module("mode")
  .controller("usersIndexCtrl", usersIndexCtrl);

usersIndexCtrl.$inject = ["User"];
function usersIndexCtrl(User){
    $("body").css("background-image", "url('../main6.jpg')");
  const vm   = this;
  User.query(data => {
    vm.users = data.users;
  });
}
