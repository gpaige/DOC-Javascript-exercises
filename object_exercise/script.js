var states = [
  "Alabama",
  "California",
  "Connecticut",
  "District of Columbia",
  "Maine",
  "Minnesota"
];

var numEmployees = [
  234726,
  1111812,
  157363,
  1275,
  46741,
  288583
];

// annualPay expressed in thousands of dollars
var annualPay = [
  11759599,
  69487378,
  10586486,
  56900,
  2477958,
  16119212
]

// start by making an empty results array
results = []
// iterate over one of the arrays}
   for (i = 0; i < states.length; i++) {
     var state = {
		  name: states[i];
		  numEmployees: numEmployees [i];
		  annualPay: annualPay[i];
};
results.state.push(state)
}

  //     console.log(states[i], numEmployees[i], annualPay[i])

// each time (in the loop), make a new object
// set the properties on that object using the 3 arrays (and the index `i`)
// add the object to your results array
