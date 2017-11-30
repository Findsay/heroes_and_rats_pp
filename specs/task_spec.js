var assert = require("assert");
var Task = require("../task.js");

describe("Task", function(){

	var task;

  beforeEach(function(){
    task = new Task("Kill Rats", 2, "Low", 50)
  });

  it("should have a description", function(){
    assert.strictEqual(task.description, "Kill Rats")
  });

  it("should have a difficulty", function(){
    assert.strictEqual(task.difficulty, 2)
  });

  it("should have an urgency", function(){
    assert.strictEqual(task.urgency, "Low")
  });

  it("should have a reward", function(){
    assert.strictEqual(task.reward, 50)
  });

  it("should start incomplete", function(){
    assert.strictEqual(task.completed, false)
  });

  it("should be able to be completed", function(){
    task.complete()
    assert.strictEqual(task.completed, true)
  });


});
