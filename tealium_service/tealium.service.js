(function() {
    "use strict";

    angular
        .module('com.app.services.tealium')
        .factory('TealiumService', TealiumService);

    /* @ngInject */
    function TealiumService(tealium) {
		// Set your static or common data attributes here for all view tags
        var cache = {
            'isProduction': 'false',
            'site_type': 'desktop',
            'site_language': 'en'
        };

        return {
            link: link,
            setItem: setItem,
            view: view
        };

        function link(data) {
            tealium.link(data);
        }
		// you can set cached items on the fly
        function setItem(key, val) {
            cache[key] = val;
        }

        function view(data) {
            var tealiumData = {};
			
            angular.extend(tealiumData, cache, data);

            tealium.view(tealiumData);
        }
    }

})();
