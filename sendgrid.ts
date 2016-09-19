declare const require: any; // To quench error


// The following line imports sendgrid correctly
import { SendGrid } from "sendgrid";
console.log(SendGrid); // undefined


// The following line import sendgrid correctly (uncomment to test it out)
// const SendGrid = require('sendgrid');
// console.log(SendGrid); // an object

/*
The import statement line below is the same as the require statement above.
This is the correct way to use the sendgrid api, as using `import { Sendgrid } from 'sendgrid'` will result in Sendgrid
being undefined. (as shown above).

Although the wildcard import works, actually calling the imported function results in the error "Cannot invoke an
expression whose type lacks a call signature. (2349)".
*/

// Uncomment this line to cause the error.
// import * as SendGrid from 'sendgrid';



// When using wildcard import, this causes the error "Cannot invoke an expression whose type lacks a call signature."
const sendGrid = SendGrid("");

export default sendGrid;
