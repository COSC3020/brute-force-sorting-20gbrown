const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test = jsc.forall("array nat", function(arr) {
    var a1 = arr.slice(); // Make a copy of the input array
    var a2 = arr.slice().sort(function(a, b) { return a - b; });
    permutationSort(a1);
    return JSON.stringify(a1) === JSON.stringify(a2);
});

jsc.assert(test, { tests: 1000 }); // You can specify the number of tests you want to run


