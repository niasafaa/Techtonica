/*eslint-disable*/
//const EventRecommenderObj = require('./index.js');
//events_list = EventRecommenderObj.events;

$(document).ready(function() {
  let image = '';
  let event_name = '';
  let location = '';
  let time = '';
  let cost = '';

  let html = ``;
  $.each(myEventsPageApp.events, function(index, event) {
    event = myEventsPageApp.events[index];
    image = event.photo;
    event_name = event.eventName;
    time = event.time;
    cost = event.cost;
    location = event.location;
    let card = `
    <div class="card">
      <img src="${image}" class="card-img-top" alt="alt message">
      <div class="card-body">
        <h5 class="card-title">${event_name}</h5>
        <p class="card-text">Location: ${location} <br> Time: ${time} <br> Cost: ${cost}</p>
      </div>
      <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>`;
    html += card;
  });
  console.log(html);
  $('.card-deck').append(html);
});

/*
<div class="row"
<div class="card">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
</div>
<div class="card-footer">
  <small class="text-muted">Last updated 3 mins ago</small>
</div>
</div>
</div>
*/
