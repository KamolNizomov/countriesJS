
//Protractor Configuration
exports.config = {


    //Webdriver cinnection 
    directConnect: true,


    // Which brower to run 
    multiCapabilities: [
        { browserName: 'firefox' },
        //{browserName: 'chrome'}
    ],
    
    //Test Cases to run 
    specs: ['./test/test.js'],

};