(function() {
    "use strict";
	/* change module definition to match your own application */
    angular
        .module('com.app.services.tealium')
        .config(TealiumConfig);

    /* @ngInject */
    function TealiumConfig(tealiumProvider) {

        tealiumProvider.setConfig({
            account: '',
            profile: '',
            environment: 'dev',
            suppress_first_view: true
        });

       /* tealiumProvider.setViewIdMap({
            '/index': function () {
                return {
                    data1: 1,
                    data2: 2
                };
            }
        }); */
    }
})();