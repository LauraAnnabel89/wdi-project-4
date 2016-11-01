angular
  .module("mode")
  .controller("itemsIndexCtrl", itemsIndexCtrl);

itemsIndexCtrl.$inject = ["Item", "$stateParams"];
function itemsIndexCtrl(Item, $stateParams){
  const vm = this;

  Item
    .query()
    .$promise
    .then(data => {
      vm.items = data.items;
    });
}
