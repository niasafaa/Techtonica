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

module.exports = Event;
