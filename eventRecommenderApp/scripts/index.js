// const Event = require('./events.js');
// const User = require('./users.js');

class Event {
  constructor(eventName, location, time, cost, photo) {
    this.eventName = eventName;
    this.location = location;
    this.time = time;
    this.cost = cost;
    this.photo = photo;
    this.guests = [];
    this.id = ''; // function to generate ids
  }

  addPhoto(photo) {
    this.photo = photo;
  }
}

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.userEvents = [];
    this.id = ''; // function to generate ids
  }

  addPhoto(photo) {
    this.photo = photo;
  }
}

class EventRecommender {
  constructor() {
    // All main properties should go here.
    this.events = [];
    this.users = [];
  }

  addEvent(eventName, location, time, cost, photo) {
    const event = new Event(eventName, location, time, cost, photo);
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
      if (x.cost === 'Free') {
        x.cost = 0;
      } else {
        x.cost = x.cost.substr(1);
        x.cost = parseInt(x.cost);
      }
      return x.cost >= lower && x.cost <= upper;
    });
    return tempEventList;
  }
}
// Creating events to be shown on main event page.
const myEventsPageApp = new EventRecommender();

myEventsPageApp.addEvent(
  "Lily and Jamila's Wedding",
  ' 211 Harbor Street',
  'Tuesday July 22nd',
  'Free',
  'event_images/img1.jpg'
);
myEventsPageApp.addEvent(
  'Lantern Festival',
  ' Great Way Park',
  'Saturday April 30th',
  '$12',
  'event_images/img2.jpg'
);
myEventsPageApp.addEvent(
  'Dead Walker Concert',
  'JustDoIt Pavillion',
  'Sunday June 20th',
  '$50',
  'event_images/img3.jpg'
);
// myEventsPageApp.addEvent(
//   'Solstice Carnival',
//   'JustDo It Pavillion',
//   'Friday January 10th',
//   'Free',
//   'event_images/img4.jpg'
// );
// myEventsPageApp.addEvent(
//   'Mobile Banking Conference',
//   'Chase Center',
//   'Monday Feburary 8th',
//   '$500',
//   'event_images/img5.jpg'
// );
// myEventsPageApp.addEvent(
//   'Live By the Levee Music Festival',
//   'Saint Louis Waterfront',
//   'Saturday August 25th',
//   '$225',
//   'event_images/img6.jpg'
// );
// myEventsPageApp.addEvent(
//   'Six Flags Fourth of July',
//   'Six Flags Vallejo',
//   'Sunday July 4th',
//   '$45',
//   'event_images/img7.jpg'
// );
// myEventsPageApp.addEvent(
//   'Crystal Live Art',
//   'Sage Tree Art Museum',
//   'Sunday August 23rd',
//   '$25',
//   'event_images/img8.jpg'
// );
// myEventsPageApp.addEvent(
//   'Annual Flea Market',
//   'Portland Market St',
//   'Sunday May 25th',
//   'Free',
//   'event_images/img9.jpg'
// );

// export EventRecommender object to jquery file
// module.exports = myEventsPageApp;

/*
// Testing

const myTestApp = new EventRecommender();
myTestApp.addEvent('Big Party', 'my house', 'right now hoes', '$500');
myTestApp.addUser('Nia C', 'nia@charfam', '1234');

// myTestApp.deleteEvent('Big Party');

const myTestUser = myTestApp.users[0];
const myTestEvent = myTestApp.events[0];

myTestApp.saveUserEvent(myTestUser, myTestEvent);

myTestUser.addPhoto('myphoto');
myTestEvent.addPhoto('myphoto');

console.log(myTestApp.filterPrice(20, 500));

// myTestApp.deleteUser('Nia C');

// const myUser = new User('Nia C', 'nia@charfam', '1234');
// const myEvent = new Event('Big Party', 'my house', 'right now hoes');
console.log(myTestApp);
// console.log(myTestEvent.guests);
*/
