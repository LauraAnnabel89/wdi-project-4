angular
  .module("mode")
  .controller("itemsEditCtrl", itemsEditCtrl);

itemsEditCtrl.$inject = ["Item", "$stateParams", "$state"];
function itemsEditCtrl(Item, $stateParams, $state){
    $("body").css("background-image", "");
  const vm = this;

  Item.get($stateParams, data => {
    vm.item = data.item;
  });

  vm.submit = () => {
    console.log("vm.item", vm.item);
    Item
    .update($stateParams, { item: vm.item.data })
      .$promise
      .then(data => {
        $state.go("item", $stateParams);
      });
  };
}
