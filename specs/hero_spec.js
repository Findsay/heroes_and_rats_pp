var assert = require("assert");
var Hero = require("../hero.js");

describe("Hero", function(){

  var hero;

  beforeEach(function(){
    hero = new Hero("Link", 100, "Chuchus");
  });

  it("should have a name");
  it("should have health");
  it("should have a fave food");
  it("should talk and say their name");
  it("should have a collection of tasks, which starts empty");
  it("should be able to add a task to their collection");

})
