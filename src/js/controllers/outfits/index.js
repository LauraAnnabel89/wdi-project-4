angular
  .module("mode")
  .controller("outfitsIndexCtrl", outfitsIndexCtrl);

outfitsIndexCtrl.$inject = ["Outfit"];
function outfitsIndexCtrl(Outfit){
  console.log("running");
    $("body").css("background-image", "");
  const vm   = this;

  Outfit
    .query()
    .$promise
    .then(data => {
      console.log(data);
      console.log(data.outfits);
      vm.outfits = data.outfits;
    });
}
