var _ = require("lodash");

var Hero = function(name, health, faveFood){
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.tasks = [];
};

Hero.prototype = {
  talk: function(){
    return "Hi, my name is " + this.name;
  },
  addTask: function(task){
    this.tasks.push(task);
  },
  eat: function(food){
    if (food.name === this.faveFood){
      this.health += food.replenishmentValue * 1.5;
    }else{
      this.health += food.replenishmentValue;
    }

  },
  sortTasks: function(type){
    var result = _.sortBy(this.tasks, type);
    return result.reverse();
  }
}

module.exports = Hero;
