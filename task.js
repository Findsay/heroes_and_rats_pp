var Task = function(description, difficulty, urgency, reward){
	this.description = description;
	this.difficulty = difficulty;
	this.urgency = urgency;
  this.reward = reward;
  this.completed = false
};

Task.prototype = {
	complete: function(){
		this.completed = true;
	}
};



module.exports = Task
