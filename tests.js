let Parser = require("./solution.js");
let assert = require("chai").assert;



describe("MyTests", () => {

    it('shouldInitalizeParser', function () {

        let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

        assert.equal(parser.data.length,3);

    });


    it('shouldAddNewPosition', function () {

        let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        parser.addEntries("Steven:tech-support Edd:administrator");

        assert.equal(parser.data.length,5);

    });

    it('shouldReturnAddEntries', function () {

        let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        assert.equal(parser.addEntries("Steven:tech-support Edd:administrator"),"Entries added!");
    });

    it('shouldRemoveEntry', function () {
        let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

        assert.equal(parser.removeEntry("John"),'Removed correctly!');


    });

    it('shouldReturnAddedToLog', function () {

        let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

        assert(parser._addToLogInitial(),'Added to log');

    });


    it('shouldPrintCorrectly', function () {


        let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"} ]');
        parser.addEntries("Steven:tech-support Edd:administrator");

        assert.equal(parser.print(),'id|name|position\n' +
            '0|Nancy|architect\n' +
            '1|John|developer\n' +
            '2|Steven|tech-support\n' +
            '3|Edd|administrator')
    });




});