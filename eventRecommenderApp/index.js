const Event = require('./events.js');
const User = require('./users.js');

class EventRecommender {
  constructor() {
    // All main properties should go here.
    this.events = [];
    this.users = [];
  }

  addEvent(eventName, location, time, cost) {
    const event = new Event(eventName, location, time, cost);
    this.events.push(event);
  }

  addUser(name, email, password) {
    const event = new User(name, email, password);
    this.users.push(event);
  }

  saveUserEvent(user, event) {
    user.userEvents.push(event);
    event.guests.push(user);
  }

  deleteUser(name) {
    for (let i = 0; i < this.users.length; i++)
      if (name === this.users[i].name) {
        this.users.splice(i, 1);
      }

    for (let i = 0; i < this.events.length; i++)
      for (let j = 0; j < this.events[i].guests.length; j++) {
        if (name === this.events[i].guests[j].name) {
          this.events[i].guests.splice(j, 1);
        }
      }
  }

  deleteEvent(eventName) {
    for (let i = 0; i < this.events.length; i++)
      if (eventName === this.events[i].eventName) {
        this.events.splice(i, 1);
      }

    for (let i = 0; i < this.users.length; i++)
      for (let j = 0; j < this.users[i].userEvents.length; j++) {
        if (eventName === this.users[i].userEvents[j]) {
          this.users[i].userEvents.splice(j, 1);
        }
      }
  }

  filterPrice(lower, upper) {
    const tempEventList = this.events.filter(x => {
      return x.cost >= lower && x.cost <= upper;
    });
    return tempEventList;
  }
}

/* Testing

const myTestApp = new EventRecommender();
myTestApp.addEvent('Big Party', 'my house', 'right now hoes', 500);
myTestApp.addUser('Nia C', 'nia@charfam', '1234');

// myTestApp.deleteEvent('Big Party');

const myTestUser = myTestApp.users[0];
const myTestEvent = myTestApp.events[0];

myTestApp.saveUserEvent(myTestUser, myTestEvent);

myTestUser.addPhoto('myphoto');
myTestEvent.addPhoto('myphoto');

// console.log(myTestApp.filterPrice(20, 500));

// myTestApp.deleteUser('Nia C');

// const myUser = new User('Nia C', 'nia@charfam', '1234');
// const myEvent = new Event('Big Party', 'my house', 'right now hoes');
console.log(myTestApp);
// console.log(myTestEvent.guests);
*/
