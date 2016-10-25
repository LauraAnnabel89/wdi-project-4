angular
  .module("mode")
  .controller("outfitsNewCtrl", outfitsNewCtrl);

outfitsNewCtrl.$inject = ["Outfit", "$state"];
function outfitsNewCtrl(Outfit, $state){
  const vm  = this;

  vm.submit = () => {
    Outfit
      .save({ outfit: vm.outfit })
      .$promise
      .then(data => {
        $state.go("outfitsIndex");
      });
  };
}
