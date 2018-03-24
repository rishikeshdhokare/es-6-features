var chai  = require('chai');

const assert = chai.assert;
const should = chai.should();

//Correct the following tests without modifying the assert line
//The `its` are descriptions of how to solve rather than normal behavior strings.

describe('`let` vs. `var`', () => {

  it('update scoping of the variables', () => {
    if (true) {
      let varX = true;
    }
    
    assert.equal(varX, true);//do NOT modify this line
  });

  it('update scoping of the variables', () => {
    if (true) {
      var letX = true;
    }
    
    assert.throws(() => console.log(letX));//do NOT modify this line
  });

});

describe('spread operators', function () {
  
  it('extract each item from the array', function() {
    const [b, a] = [...[1, 2]];
    
    assert.equal(a, 1);//do NOT modify this line
    assert.equal(b, 2);//do NOT modify this line
  });
  
   it('extract each item from the array that uses spreads', function() {
    const [a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]];
     
    assert.equal(a, 1);//do NOT modify this line
    assert.equal(b, 2);//do NOT modify this line
    assert.deepEqual(rest, [3, 4, 5]);//do NOT modify this line
  });

  it('update to work with both spread and rest', function() {
    const [...rest] = [...[,1, 2, 3, 4, 5]];
    
    assert.deepEqual(rest, [1, 2, 3, 4, 5]);//do NOT modify this line
  });
  
});


describe('template strings', function () {
  
   it('create a simple template string', function() {
      let str = ``;
     
      assert.equal(str, 'like a string');//do NOT modify this line
    });
  
   it('update a template string to print a variable', function() {
      let x = 99;
      let evaluated = `x=x`;
     
      assert.equal(evaluated, 'x=' + x);//do NOT modify this line
    });
    
    it('update a template string to print multiple variables', function() {
      let x = 10;
      let y = 20;
      let evaluated = '${ x } + $ { y }';
      
      assert.equal(evaluated, x + '+' + y);//do NOT modify this line
    });
});

describe('destructuring', function () {
  
   it('swap two variables, in one operation', () => {
    let [x, y] = ['ax', 'why'];
    [x, y] = [x, y];
     
     
    assert.deepEqual([x, y], ['why', 'ax']);//do NOT modify this line
  });
  
   it('use destructuring to extract x', () => {
    const x = {x: 1};
     
    assert.equal(x, 1);//do NOT modify this line
  });
  
  it('make destruct work with leading comma operators', () => {
    const all = ['ax', 'why', 'zet'];
    const [,z] = all;
    
    assert.equal(z, 'zet');//do NOT modify this line
  });
});

describe('arrow functions', function () {
  
 it('one parameter can be written without parens', () => {
    var func = p => param - 1;
   
    assert.equal(func(23), 24);//do NOT modify this line
  });

  it('many params require parens', () => {
    var func = param => param + param1;
    
    assert.equal(func(23, 42), 23+42);//do NOT modify this line
  });
  
  it('bound at definition time, use `=>` ', function() {
    this.foo = 'bar';
    var fn = function() {
      return this.foo;
    }
    
    fn();
    
    assert.strictEqual(fn(), 'bar');//do NOT modify this line
  });
 
  
  it('`arguments` doesnt work inside arrow functions', function() {
    let fn = (x, y) => {
      return arguments; //modify this line to return something that will satisfy the assertion
    };
    assert.equal(fn(1, 2).length, 2);//do NOT modify this line
  });
});

describe('class creation', () => {

  it('create a simple class named TestClass using Class notation', function() {
    let TestClass;
    const instance = new TestClass();
    
    assert.equal(typeof instance, 'object');//do NOT modify this line
  });
  
  it('update constructor to store `id` on the class', function() {
    class User {
      constructor(id) {}
    }
    
    const user = new User(42);
    
    
    assert.equal(user.id, 42);//do NOT modify this line
  });

  it('define a method `writesTests` on teh class and return false', function() {
    class User {
    }
    
    const notATester = new User();
    
    
    assert.equal(notATester.writesTests(), false);//do NOT modify this line
  });

  it('create a class with multiple methods', function() {
    class User {
      wroteATest() { this.everWroteATest = true; }
      isLazy() {  }
    }
    
    const tester = new User();
    
    assert.equal(tester.isLazy(), true);//do NOT modify this line
    tester.wroteATest();//do NOT modify this line
    assert.equal(tester.isLazy(), false);//do NOT modify this line
  });

  it('create an anonymous class', () => {
    const classType = typeof {};
    
    assert.equal(classType, 'function');//do NOT modify this line
  });

});