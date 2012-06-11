// Import the page-mod API
var pageMod = require("page-mod");
const data = require('self').data;

// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
    include: "*.paypal.com",
    contentScriptWhen: 'ready',
    contentScriptFile: [data.url('jquery-1.7.2.min.js'),
                        data.url('paypal.js')],
});

console.log("The add-on is running.");
