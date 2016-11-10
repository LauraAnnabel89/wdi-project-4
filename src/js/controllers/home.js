

angular
  .module("mode")
  .controller("homeCtrl", homeCtrl);

homeCtrl.$inject = ["$window", "CurrentUserService"];

function homeCtrl($window, CurrentUserService) {
  // 
  // $('#toggle').click(function() {
  //    $(this).toggleClass('active');
  //    $('#overlay').toggleClass('open');
  //   });
  console.log("runnign");
    $("body").css("background-image", "url('../main6.jpg')");
setTimeout(function(){
  if (CurrentUserService.getUser() && !$window.localStorage.getItem("firstVisit")) {
    $('#myModal').modal('show');
    $window.localStorage.setItem("firstVisit", true);
  }
}, 1000);

}
