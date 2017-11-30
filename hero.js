var Hero = function(name, health, faveFood){
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.tasks = [];
};

Hero.prototype = {
  talk: function(){
    return "Hi, my name is " + this.name;
  }
}

module.exports = Hero;
