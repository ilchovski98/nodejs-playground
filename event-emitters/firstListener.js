const TicketManager = require('./ticketManager');

const ticketManager = new TicketManager(1);

ticketManager.on('buy', (email, price) => {
  console.log('Someone bought a ticket', email, price);
});

ticketManager.buy('marto@gmail.com', 200);
ticketManager.buy('marto@gmail.com', 200);

ticketManager.once('buy', () => {
  console.log('This is called only once.');
});

ticketManager.buy('marto@gmail.com', 200);
ticketManager.buy('marto@gmail.com', 200);
