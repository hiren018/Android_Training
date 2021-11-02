const eventemitter = require('events')

const emmiter = new eventemitter();

emmiter.on('log', () => {
    console.log('log is called')
})

emmiter.emit('log')
emmiter.emit('log')
emmiter.emit('log')