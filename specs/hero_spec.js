var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");

describe("Hero", function(){

  var hero, task, food;

  beforeEach(function(){
    hero = new Hero("Link", 100, "Chuchus");
    task = new Task("Kill Rats", 2, "Low", 50);
    food = new Food("chicken", 10);
    faveFood = new Food("Chuchus", 20);
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
  it("should be able to eat food and replenish health", function(){
    hero.eat(food);
    assert.strictEqual(hero.health, 110);
  });
  it("if eat fave food, their health shuld increase by 1.5 food rv", function(){
    hero.eat(faveFood);
    assert.strictEqual(hero.health, 130);
  })

})
