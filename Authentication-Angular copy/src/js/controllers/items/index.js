angular
  .module("angularAuthentication")
  .controller("itemsIndexCtrl", itemsIndexCtrl);

itemsIndexCtrl.$inject = ["Item"];
function itemsIndexCtrl(Item){
  const vm   = this;
  Item.query(data => {
    vm.items = data.items;
  });
}
