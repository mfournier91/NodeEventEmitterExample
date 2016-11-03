//this exercise is to understand node emitters conceptually

function Emitter() { //make a constructor function for an emitter
  this.events = {} //it has a property called events with an empty obj
}

Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || []; //checks if this.events has a property of type. If not creates an empty array for that property
  this.events[type].push(listener); // pushes the listener to the array associated with the type property.
}

Emitter.prototype.emit = function(type) {
  if(this.events[type]){  //if the property exists i.e. if there is an event with this name type
    this.events[type].forEach(function(listener){ //loop thru all the listeners associated with the event
      listener(); //and execute the listener
    })
}
}

module.exports = Emitter; //Export the constructor function
