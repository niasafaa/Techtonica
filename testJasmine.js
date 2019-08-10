function calculator (num1, input_exp, num2){
    expressions = {
      '+': num1 + num2, 
      '-': num1 - num2,
      '/': num1 / num2,
      '*': num1 * num2,
      '**': num1 ** num2,
      '%': num1 % num2
    }
    
    return expressions[input_exp]
  }
  
  //console.log(calculator(1, '+',1))

  

var Jasmine = require('jasmine');
var jasmine = new Jasmine();
/*
jasmine.configureDefaultReporter({
    // The `timer` passed to the reporter will determine the mechanism for seeing how long the suite takes to run.
    timer: new jasmine.jasmine.Timer(),
    // The `print` function passed the reporter will be called to print its results.
    print: function() {
        process.stdout.write(arguments);
    },
    // `showColors` determines whether or not the reporter should use ANSI color codes.
    showColors: true

});
*/
describe("A function thats a calculator", function() {
  it("should calculate expression spec with an expectation", function() {
    expect(calculator(1, '+',1)).toEqual(2);
  });
});


jasmine.execute(); 