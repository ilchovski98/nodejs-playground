const { EventEmitter } = require('events');

const firstEventEmitter = new EventEmitter();

firstEventEmitter.emit('my first event');
