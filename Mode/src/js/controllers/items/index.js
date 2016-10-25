angular
  .module("mode")
  .controller("itemsIndexCtrl", itemsIndexCtrl);

itemsIndexCtrl.$inject = ["Item"];
function itemsIndexCtrl(Item){
  const vm   = this;

  Item
    .query()
    .$promise
    .then(data => {
      vm.items = data.items;
    });
}
