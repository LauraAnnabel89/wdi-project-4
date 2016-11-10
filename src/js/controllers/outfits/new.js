angular
  .module("mode")
  .controller("outfitsNewCtrl", outfitsNewCtrl);

outfitsNewCtrl.$inject = ["Item", "Outfit", "$state"];
function outfitsNewCtrl(Item, Outfit, $state){
    $("body").css("background-image", "");
  const vm  = this;

  Item
    .query()
    .$promise
    .then(data => {
      vm.items = data.items;
    });

  vm.outfit = {
    items: []
  };

  vm.selectItem = function(item){
    if (vm.outfit.items.indexOf(item._id) === -1) {
      vm.outfit.items.push(item._id);
    } else {
      vm.outfit.items.splice(vm.outfit.items.indexOf(item._id), 1);
    }
  };

  vm.submit = () => {
    Outfit
      .save({ outfit: vm.outfit })
      .$promise
      .then(data => {
        $state.go("outfitsIndex");
      });
  };
}
