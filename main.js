import { test } from './scripts/test.js';

// Extract parameters from command 
const script = process.argv[2]; 
const parameter = process.argv[3]; 
// const parameter2 = process.argv[4]; 

switch (script) {
    case 'test':
        test(parameter || 'user');
        break;
    default:
        console.error('Unknown script. General usage: node main.js <script> <parameter>');
        console.error('Available scripts: hello');
        console.error('Sample command: node main.js hello sofia');
}
