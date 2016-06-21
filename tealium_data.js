/* TealiumHelper.data */

angular.module('TealiumHelper.data', [])
    .provider('tealiumData', function() {
        var view_id_map = {};

        return {
            setViewIdMap: function(map) {
                view_id_map = map;
            },
            addViewIdMapEntry: function( key, func ) {
                view_id_map[key] = func;
            },
            $get: function() {
                return {
                    getDataLayer: function(view_id) {
                        var dataLayer;
                        try {
                            if (view_id_map[view_id]){
                                dataLayer = view_id_map[view_id]();
                            }
                            else {
                                dataLayer = view_id_map.generic ? view_id_map.generic() : {};
                            }
                        } catch (err) {
                            data = {};
                            data.page_type = "generic dataLayer error";
                            data.error_name = err.name;
                            data.error_message = err.message;
                            dataLayer = data;
                        }
                        return dataLayer;
                    }
                }
            }
        };
    });
