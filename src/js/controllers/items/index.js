angular
  .module("mode")
  .controller("itemsIndexCtrl", itemsIndexCtrl);

itemsIndexCtrl.$inject = ["Item", "$stateParams"];
function itemsIndexCtrl(Item, $stateParams){
    $("body").css("background-image", "");
  const vm = this;

  Item
    .query()
    .$promise
    .then(data => {
      vm.items = data.items;
    });
}
