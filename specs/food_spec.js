var assert = require("assert");
var Food = require("../food.js");

describe("Food", function(){

	var food;

  beforeEach(function(){
    food = new Food("chicken", 10)
  });

  it("should have a name", function(){
    assert.strictEqual(food.name, "chicken");
  });

  it("should have a replenishmentValue", function(){
    assert.strictEqual(food.replenishmentValue, 10);
  });

})
