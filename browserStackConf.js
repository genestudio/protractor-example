exports.config = {
    seleniumAddress: 'http://hub.browserstack.com/wd/hub',
    specs: ['spec/*spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',

    onPrepare: function(){

    },

    capabilities: {
        'browserName' : 'IE',
        'browser_version' : '11.0',
        'os' : 'Windows',
        'os_version' : '8.1',
        'browserstack.user': 'brine1',
        'browserstack.key': '6dsjswP4BpbfE5Zfinvr'
    },


    // browserstack currently has issues with running multiple tests...
//    multiCapabilities: [{
//        'browserName' : 'IE',
//        'browser_version' : '11.0',
//        'os' : 'Windows',
//        'os_version' : '8.1',
//        'browserstack.user': 'brine1',
//        'browserstack.key': '6dsjswP4BpbfE5Zfinvr'
//    }, {
//        'browser': 'Safari',
//        'browser_version': '7.0',
//        'os': 'OS X',
//        'os_version': 'Mavericks',
//        'browserstack.user': 'brine1',
//        'browserstack.key': '6dsjswP4BpbfE5Zfinvr'
//    }],

    jasmineNodeOpts: {
        isVerbose: true,
        includeStackTrace: true,
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};

