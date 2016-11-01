angular
  .module("mode")
  .factory("Item", itemFactory);

itemFactory.$inject = ["API", "$resource"];
function itemFactory(API, $resource){
  return $resource(`${API}/items/:id`, { id: "@_id"}, {
    'query':    { method: "GET", isArray: false },
  });
}
