angular
  .module("mode")
  .controller("outfitsIndexCtrl", outfitsIndexCtrl);

outfitsIndexCtrl.$inject = ["Outfit"];
function outfitsIndexCtrl(Outfit){
  const vm   = this;

  Outfit
    .query()
    .$promise
    .then(data => {
      vm.outfits = data.outfits;
    });
}
