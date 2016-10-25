angular
  .module("mode")
  .controller("outfitsShowCtrl", outfitsShowCtrl);

outfitsShowCtrl.$inject = ["Outfit", "$stateParams", "$state"];
function outfitsShowCtrl(Outfit, $stateParams, $state){
  const vm = this;

  Outfit.get($stateParams, data => {
    vm.outfit = data.outfit;
  });

  vm.outfitDelete = () => {
    Outfit
      .delete($stateParams)
      .$promise
      .then(data => {
        $state.go("outfitsIndex");
      });
  };
}
