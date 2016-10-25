$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

homeCtrl.$inject = ["$window", "CurrentUserService"];

function homeCtrl($window, CurrentUserService) {
setTimeout(function(){
  if (CurrentUserService.getUser() && !$window.localStorage.getItem("firstVisit")) {
    $('#myModal').modal('show');
    $window.localStorage.setItem("firstVisit", true);
  }
}, 1000);

}
