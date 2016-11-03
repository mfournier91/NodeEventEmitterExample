var Emitter = require('./emitter'); //grab the constructor function

var emtr = new Emitter //create a new instance for emitter

emtr.on('greet', function() {  //contrived example of an event
  console.log('Someone said hello');
});

emtr.on('greet', function() {  //add another function to occur with the greet event
  console.log('A greeting occured')
});

console.log('Hi. My name is... chicka chicka')
emtr.emit('greet');
