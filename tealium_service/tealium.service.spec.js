describe('Tealium Service', function() {
    "use strict";

    var service, tealium,
        tealiumData = {
            "isProduction": "false",
            "site_type": "desktop",
            "site_language": "en"
        };

    beforeEach(module('com.app.services.tealium'));
    beforeEach(inject(function($injector, _tealium_) {
        service = $injector.get('TealiumService');
        tealium = _tealium_;

        spyOn(tealium, 'link');
        spyOn(tealium, 'view');
    }));

    it('should call tealium view', function() {
        service.view(tealiumData);

        expect(tealium.view).toHaveBeenCalledWith(tealiumData);
    });

    it('should call tealium link', function() {
        service.link(tealiumData);
        expect(tealium.link).toHaveBeenCalledWith(tealiumData);
    });

    it('should extend data when calling view', function() {
        var data = {
                "test1": 1,
                "test2": 2
            },
            results;

        service.setItem("test1", false);
        service.setItem("extra", true);

        service.view(data);

        results = tealium.view.calls.argsFor(0);

        expect(results[0].test1).toBe(1);
        expect(results[0].test2).toBe(2);
        expect(results[0].extra).toBe(true);
    });

    it('should extend data when calling link', function() {
        var data = {
                "test1": 1,
                "test2": 2
            },
            results;

        service.setItem("test1", false);

        service.link(data);

        results = tealium.link.calls.argsFor(0);

        expect(results[0].test1).toBe(1);
        expect(results[0].test2).toBe(2);
    });
});
