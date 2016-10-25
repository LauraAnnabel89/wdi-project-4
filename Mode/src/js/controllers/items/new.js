angular
  .module("mode")
  .controller("itemsNewCtrl", itemsNewCtrl);

itemsNewCtrl.$inject = ["Item", "$state"];
function itemsNewCtrl(Item, $state){
  const vm  = this;
  vm.submit = () => {
    Item
    .save({ item: vm.item })
    .$promise
    .then(data => {
      $state.go("itemsIndex");
    });
  };
}
