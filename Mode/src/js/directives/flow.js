angular
.module("mode")
.config(['flowFactoryProvider', function (flowFactoryProvider) {
    flowFactoryProvider.defaults = {
        target: '/upload',
        permanentErrors:[404, 500, 501]
      };
])};
};
