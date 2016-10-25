angular
  .module("mode")
  .controller("itemsEditCtrl", itemsEditCtrl);

itemsEditCtrl.$inject = ["Item", "$stateParams", "$state"];
function itemsEditCtrl(Item, $stateParams, $state){
  const vm = this;

  Item.get($stateParams, data => {
    vm.item = data.item;
  });

  vm.submit = () => {
    Item
      .update($stateParams, { item: vm.item })
      .$promise
      .then(data => {
        $state.go("item", $stateParams);
      });
  };
}
