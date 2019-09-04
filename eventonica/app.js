const inquirer = require('inquirer');
require('dotenv').config();
const eventful = require('eventful-node');
const pool = require('./connection');

const client = new eventful.Client(process.env.EVENTFUL_KEY);
const app = {};

app.startQuestion = closeConnectionCallback => {
  inquirer
    .prompt({
      type: 'list',
      message: 'What action would you like to do?',
      choices: [
        'Complete a sentence',
        'Create a new user',
        'Find one event of a particular type in San Francisco next week',
        'Mark an existing user to attend an event in database',
        'See all events that a particular user is going to',
        'See all the users that are going to a particular event',
        'Exit'
      ],
      name: 'action'
    })
    .then(res => {
      const continueCallback = () => app.startQuestion(closeConnectionCallback);

      if (res.action === 'Complete a sentence') app.completeSentence(continueCallback);
      if (res.action === 'Create a new user') app.createNewUser(continueCallback);
      if (res.action === 'Find one event of a particular type in San Francisco next week')
        app.searchEventful(continueCallback);
      if (res.action === 'Mark an existing user to attend an event in database')
        app.matchUserWithEvent(continueCallback);
      if (res.action === 'See all events that a particular user is going to')
        app.seeEventsOfOneUser(continueCallback);
      if (res.action === 'See all the users that are going to a particular event')
        app.seeUsersOfOneEvent(continueCallback);
      if (res.action === 'Exit') {
        closeConnectionCallback();
      }
    });
};

app.completeSentence = continueCallback => {
  // YOUR WORK HERE
  const questions = [
    {
      type: 'input',
      name: 'clothing',
      message:
        'Complete the sentence. My [CLOTHING ITEM] is [COLOR]!\nEnter a clothing item below.\n'
    },
    {
      type: 'input',
      name: 'color',
      message: '\n Enter a color below.\n'
    }
  ];
  inquirer.prompt(questions).then(answer => {
    console.log(`\n My ${answer.clothing} is ${answer.color}!\n`);
    inquirer
      .prompt({
        type: 'list',
        name: 'MainMenuPrompt',
        message: 'Would you like to return to the main menu?\n',
        choices: ['Yes', 'No']
      })
      .then(answer => {
        console.log(answer);
        if (answer.MainMenuPrompt === 'Yes') {
          console.log('\n\n\n');
          return continueCallback();
        }
        console.log('Press CRTL+C to exit.');
      });
  });
  // End of your work
  // continueCallback();
};

app.createNewUser = continueCallback => {
  // YOUR WORK HERE
  const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'Please enter a username.\n'
    },
    {
      type: 'input',
      name: 'age',
      message: 'Please enter an age.\n'
    }
  ];
  inquirer.prompt(questions).then(answer => {
    const username = answer.username.toString();
    const age = parseInt(answer.age);
    pool.query('INSERT INTO users (username, age) VALUES ($1, $2)', [username, age], error => {
      if (error) {
        throw error;
      }
      pool.query('SELECT * from users', (err, results) => {
        if (error) {
          throw error;
        }
        console.log('You user has been entered to the database! \n USERS:');
        console.log(results.rows);

        inquirer
          .prompt({
            type: 'list',
            name: 'MainMenuPrompt',
            message: 'Would you like to return to the main menu?\n',
            choices: ['Yes', 'No']
          })
          .then(answer => {
            console.log(answer);
            if (answer.MainMenuPrompt === 'Yes') {
              console.log('\n\n\n');
              return continueCallback();
            }
            console.log('Press CRTL+C to exit.');
          });
      });
    });
  });
  // End of your work
};

app.searchEventful = continueCallback => {
  // YOUR WORK HERE
  const questions = [
    {
      type: 'input',
      name: 'keyword',
      message: 'Please enter an event keyword to search. I.e. dance, music, fashion.\n'
    }
  ];
  inquirer
    .prompt(questions)
    .then(answer => {
      return answer.keyword.toString();
    })
    .then(keyword => {
      client.searchEvents(
        { keywords: keyword, location: 'San Francisco', date: 'Next Week' },
        (err, data) => {
          if (err) {
            return console.error(err);
          }
          const event = {
            title: data.search.events.event[0].title,
            description: data.search.events.event[0].description.slice(0, 30),
            start_time: data.search.events.event[0].start_time,
            venue_name: data.search.events.event[0].venue_name
          };
          console.log(
            `Here's an event in SF next week you might like:
            Title:${event.title}
            Description:${event.description}
            Start Time: ${event.start_time}
            Venue: ${event.venue_name}
            `
          );
          inquirer
            .prompt({
              type: 'input',
              name: 'save',
              message:
                'Would you like to save this event to the database? Enter y for yes or n for no.'
            })
            .then(response => {
              if (response.save === 'y') {
                pool.query(
                  'INSERT INTO events (title, description, location, date) VALUES ($1, $2, $3, $4)',
                  [event.title, event.description, event.venue_name, event.start_time],
                  error => {
                    if (error) {
                      throw error;
                    }
                    pool.query('SELECT * from events', (err, results) => {
                      if (error) {
                        throw error;
                      }
                      console.log('You saved an event to the database! \n EVENTS:');
                      console.log(results.rows);
                    });
                  }
                );
              } else if (response.save === 'n') {
                app.searchEventful();
              }
              inquirer
                .prompt({
                  type: 'list',
                  name: 'MainMenuPrompt',
                  message: 'Would you like to return to the main menu?\n',
                  choices: ['Yes', 'No']
                })
                .then(answer => {
                  console.log(answer);
                  if (answer.MainMenuPrompt === 'Yes') {
                    console.log('\n\n\n');
                    return continueCallback();
                  }
                  console.log('Press CRTL+C to exit.');
                });
            });
        }
      );
    });

  // End of your work
};

app.matchUserWithEvent = continueCallback => {
  // YOUR WORK HERE

  pool.query('SELECT * from users', (err, results) => {
    if (err) {
      throw err;
    }

    const resultArray = [];
    for (const x of results.rows) {
      resultArray.push(`ID: ${x.id} USERNAME: ${x.username}`);
    }

    inquirer
      .prompt({
        type: 'list',
        name: 'userString',
        message: 'Please enter a user from the list below.\n',
        choices: resultArray
      })
      .then(userSelected => {
        let userNum = userSelected.userString.match(/\d+/g);
        pool.query('SELECT * from events ', (error, events) => {
          if (error) {
            throw error;
          }
          const eventArray = [];

          for (const x of events.rows) {
            eventArray.push(`ID: ${x.id} TITLE: ${x.title}`);
          }
          inquirer
            .prompt({
              type: 'list',
              name: 'eventString',
              message: 'Please enter an event that you want the user to attend.\n',
              choices: eventArray
            })
            .then(eventSelected => {
              let eventNum = eventSelected.eventString.match(/\d+/g);

              userNum = parseInt(userNum);
              eventNum = parseInt(eventNum);
              pool.query(
                'INSERT INTO usertoevent (user_id, event_id) VALUES ($1,$2)',
                [userNum, eventNum],
                error => {
                  if (error) {
                    throw error;
                  }
                  console.log('You added a user to an event!');
                  inquirer
                    .prompt({
                      type: 'list',
                      name: 'MainMenuPrompt',
                      message: 'Would you like to return to the main menu?\n',
                      choices: ['Yes', 'No']
                    })
                    .then(answer => {
                      console.log(answer);
                      if (answer.MainMenuPrompt === 'Yes') {
                        console.log('\n\n\n');
                        return continueCallback();
                      }
                      console.log('Press CRTL+C to exit.');
                    });
                }
              );
            });
        });
      });

    // continueCallback();
  });
};
app.seeEventsOfOneUser = continueCallback => {
  // YOUR WORK HERE
  pool.query('SELECT * from users', (err, results) => {
    if (err) {
      throw err;
    }

    const resultArray = [];
    for (const x of results.rows) {
      resultArray.push(`ID: ${x.id} USERNAME: ${x.username}`);
    }
    inquirer
      .prompt({
        type: 'list',
        name: 'userString',
        message: 'Please enter a user from the list below.\n',
        choices: resultArray
      })
      .then(userSelected => {
        let userNum = userSelected.userString.match(/\d+/g);
        userNum = parseInt(userNum);
        pool.query(
          'SELECT users.username, events.title FROM usertoevent JOIN users ON usertoevent.user_id = users.id JOIN events ON usertoevent.event_id = events.id WHERE users.id = $1;',
          [userNum],
          (error, res) => {
            if (error) {
              throw error;
            }
            console.table(res.rows);
            inquirer
              .prompt({
                type: 'list',
                name: 'MainMenuPrompt',
                message: 'Would you like to return to the main menu?\n',
                choices: ['Yes', 'No']
              })
              .then(answer => {
                console.log(answer);
                if (answer.MainMenuPrompt === 'Yes') {
                  console.log('\n\n\n');
                  return continueCallback();
                }
                console.log('Press CRTL+C to exit.');
              });
          }
        );
      });
  });

  // End of your work
};

app.seeUsersOfOneEvent = continueCallback => {
  // YOUR WORK HERE

  pool.query('SELECT * from events ', (error, events) => {
    if (error) {
      throw error;
    }
    const eventArray = [];

    for (const x of events.rows) {
      eventArray.push(`ID: ${x.id} TITLE: ${x.title}`);
    }
    inquirer
      .prompt({
        type: 'list',
        name: 'eventString',
        message: 'Please enter an event that you want the user to attend.\n',
        choices: eventArray
      })
      .then(eventSelected => {
        let eventNum = eventSelected.eventString.match(/\d+/g);
        eventNum = parseInt(eventNum);
        pool.query(
          'SELECT events.title, users.username FROM usertoevent JOIN users ON usertoevent.user_id = users.id JOIN events ON usertoevent.event_id = events.id WHERE events.id = $1;',
          [eventNum],
          (error, res) => {
            if (error) {
              throw error;
            }
            console.table(res.rows);
            inquirer
              .prompt({
                type: 'list',
                name: 'MainMenuPrompt',
                message: 'Would you like to return to the main menu?\n',
                choices: ['Yes', 'No']
              })
              .then(answer => {
                console.log(answer);
                if (answer.MainMenuPrompt === 'Yes') {
                  console.log('\n\n\n');
                  return continueCallback();
                }
                console.log('Press CRTL+C to exit.');
              });
          }
        );
      });
  });
  // End of your work
};

module.exports = app;
