

exports.config = {

    directConnect: true,

    multiCapabilities: [
        { browserName: 'firefox' },
        //{browserName: 'chrome'}
    ],

    specs: ['./test/test.js'],

};