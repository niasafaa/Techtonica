class Event {
  constructor(eventName, location, time, cost) {
    this.eventName = eventName;
    this.location = location;
    this.time = time;
    this.cost = cost;
    this.guests = [];
    this.id = ''; // function to generate ids
  }

  addPhoto(photo) {
    this.photo = photo;
  }
}

module.exports = Event;
