const EventEmitter =  require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`data received user ${name} ${id} `);
})
customEmitter.on('response', ()=>{
    console.log(`some other data received`);
})
customEmitter.emit('response', 'john', 34)