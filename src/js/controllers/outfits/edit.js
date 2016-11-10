angular
  .module("mode")
  .controller("outfitsEditCtrl", outfitsEditCtrl);

outfitsEditCtrl.$inject = ["Outfit", "$stateParams", "$state"];
function outfitsEditCtrl(Outfit, $stateParams, $state){
    $("body").css("background-image", "");
  const vm = this;

  Outfit.get($stateParams, data => {
    vm.outfit = data.outfit;
  });

  vm.submit = () => {
    Outfit
      .update($stateParams, { outfit: vm.outfit })
      .$promise
      .then(data => {
        $state.go("outfitsShow", $stateParams);
      });
  };
}
