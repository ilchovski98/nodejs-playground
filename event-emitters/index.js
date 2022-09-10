const TicketManager = require('./ticketManager');
const EmailService = require('./emailService');
const DatabaseService = require('./databaseService');

const ticketManager = new TicketManager(10);
const emailService = new EmailService();
const databaseService = new DatabaseService();

const onBuy = () => {
  console.log('I will be removed soon!');
}

ticketManager.on('buy', onBuy);

ticketManager.on('buy', (email, price, stamp) => {
  emailService.send(email);
  databaseService.save(email, price, stamp);
});

ticketManager.on('error', (error) => {
  console.log(`Gracefully handling our error: ${error}`);
});

ticketManager.off('buy', onBuy);

console.log(`We have ${ticketManager.listenerCount('buy')} listeners for the buy events.`);
console.log(`We have ${ticketManager.listenerCount('error')} listeners for the buy errors.`);

ticketManager.buy("test@email", 20);


ticketManager.removeAllListeners("buy");
console.log(`We have ${ticketManager.listenerCount("buy")} listeners for the buy event`);
ticketManager.buy("test@email", 20);
console.log("The last ticket was bought");
