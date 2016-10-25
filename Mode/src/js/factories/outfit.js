angular
  .module("mode")
  .factory("Outfit", outfitFactory);

outfitFactory.$inject = ["API", "$resource"];
function outfitFactory(API, $resource){
  return $resource(`${API}/outfits/:id`, { id: "@_id"}, {
    'query':    { method: "GET", isArray: false },
  });
}
