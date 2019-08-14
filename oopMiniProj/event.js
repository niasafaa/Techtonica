class Ticket {
  constructor(ticketType, price) {
    this.ticketType = ticketType;
    this.price = price;
  }
}

class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
    this.guests = [];
  }

  addAvailbleTickets(ticketType, price) {
    const t = new Ticket(ticketType, price);
    this.availableTickets.push(t);
  }

  searchTickets(lower, upper) {
    const ticketsInRange = [];
    for (const x of this.availableTickets) {
      if (x.price >= lower && x.price <= upper) {
        ticketsInRange.push(x);
      }
    }
    return ticketsInRange;
  }
}

// The below statement creates an object.
const eventObj1 = new Event('KLOS Golden Gala', 'An evening with hollywood vampires');
eventObj1.addAvailbleTickets('Human', 150);

// console.log(eventObj1);

const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
eventObj2.addAvailbleTickets('Vampire', 99);
const eventObj3 = new Event('Jenny Lewis", "On the line tour 2019');
eventObj3.addAvailbleTickets('Werewolf', 200);
eventObj3.addAvailbleTickets('Dragons', 5);

eventObj3.guests.push('Nia');
// console.log(eventObj3);
const eventArray = [];

eventArray.push(eventObj1, eventObj2, eventObj3);

console.log(eventObj1.searchTickets(5, 100));

/*

$(document).ready(function() {
  let html = ``;
  
  $.each(eventArray, function(index, item) {
    let ticketHTML = ``;
    $.each(item.availableTickets, function(index, ticket){
      ticketHTML += `${index+1}. ${ticket.ticketType} - $${ticket.price} `
    })
    html+=`<li>${item.name} - ${item.description} - Tickets: ${ticketHTML} </li>`;
  });
  // insert final html into #event...
  $("#event").html(html);
});
*/
