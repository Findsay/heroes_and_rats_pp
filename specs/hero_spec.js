var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js")

describe("Hero", function(){

  var hero, task;

  beforeEach(function(){
    hero = new Hero("Link", 100, "Chuchus");
    task = new Task("Kill Rats", 2, "Low", 50)
  });
  it("should have a name", function(){
    assert.strictEqual(hero.name, "Link");
  });
  it("should have health", function(){
    assert.strictEqual(hero.health, 100);
  });
  it("should have a fave food", function(){
    assert.strictEqual(hero.faveFood, "Chuchus");
  });
  it("should talk and say their name", function(){
    assert.strictEqual(hero.talk(), "Hi, my name is Link")
  });
  it("should have a collection of tasks, which starts empty", function(){
    assert.strictEqual(hero.tasks.length, 0);
  });
  it("should be able to add a task to their collection", function(){
    hero.addTask(task);
    assert.strictEqual(hero.tasks.length, 1);
  });

})
