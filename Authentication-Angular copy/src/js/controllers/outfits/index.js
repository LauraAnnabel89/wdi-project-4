angular
  .module("mode")
  .controller("outfitsIndexCtrl", outfitsIndexCtrl);

outfitsIndexCtrl.$inject = ["Outfit"];
function outfitsIndexCtrl(Outfit){
  const vm   = this;
  Outfit.query(data => {
    vm.outfits = data.outfits;
  });
}
