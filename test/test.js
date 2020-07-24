
var Request = require("request");
const { TestObject } = require("protractor/built/driverProviders");


describe('API Test', () => {


    //Global Variables
    var baseUrl = "https://restcountries.eu";
    var endpoint;
    var obj;

    it('get by name ', () => {

        endpoint = '/rest/v2/name/france';
      
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": baseUrl + endpoint

        }, (error, response, body) => {
            if (error) {
                return console.log(error);
            }

            expect(response.statusCode).toBe(200);
            obj = JSON.parse(body);

            obj.forEach((objValue) => {
                //Test
                expect(objValue.name == "France").toBe(true);
                expect(objValue.capital == "Paris").toBe(true);
                expect(objValue.capital == "London").toBe(false);   
            });
        })

    });

    it('get by capital ', () => {

        endpoint = '/rest/v2/capital/Dushanbe';

        Request.get({
            "headers": { "content-type": "application/json" },
            "url": baseUrl + endpoint

        }, (error, response, body) => {
            if (error) {
                return console.log(error);
            }

            expect(response.statusCode).toBe(200);

            obj = JSON.parse(body);
            obj.forEach((objValue) => {
                //Test
                expect(objValue.name == "Tajikistan").toBe(true);
                expect(objValue.capital == "Dushanbe").toBe(true);
                expect(objValue.capital == "Kiev").toBe(false)

            });
        })
    });

    it('get by region  ', () => {

        endpoint = '/rest/v2/lang/it';

        Request.get({
            "headers": { "content-type": "application/json" },
            "url": baseUrl + endpoint

        }, (error, response, body) => {
            if (error) {
                return console.log(error);
            }

            obj = JSON.parse(body);
            //Test
            expect(response.statusCode).toBe(200);         
            expect(obj.length).toEqual(53);  
        });
    });
});
