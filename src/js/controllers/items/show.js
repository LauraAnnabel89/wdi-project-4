angular
  .module("mode")
  .controller("itemsShowCtrl", itemsShowCtrl);

itemsShowCtrl.$inject = ["Item", "$stateParams", "$state"];
function itemsShowCtrl(Item, $stateParams, $state){
    $("body").css("background-image", "");
  const vm = this;

  Item.get($stateParams, data => {
    vm.item = data.item;
  });

  vm.itemDelete = () => {
    Item
      .delete($stateParams)
      .$promise
      .then(data => {
        $state.go("itemsIndex");
      });
  };
}
