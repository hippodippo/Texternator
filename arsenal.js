// Powered by Node.js and PureText.
// Author: Kaycee Ingram

const utils = require('./utils'),
      text =  require('./text');
              require('request');

// The Arsenal
// ------------

module.exports = {
  // The shotgun sends to multiple people.
  shot_gun: (message=null, people) => {
    if (typeof message === 'object') {
      people = message,
      message = null;
    }

    people = people.map((el, i, arr) => arr[i] = '+' + arr[i]);

    for (var i = 0; i < people.length; i++) {
      text.toNumber = people[i];

      utils.fire(message);
    }
  },

  // The minigun sends multiple to a single person.
  mini_gun: (message=null, amount) => {
    if (typeof message === 'number') {
      amount = message,
      message = null;
    }

    for (var i = 0; i <= amount; i++) {
      utils.fire(message);
    }

  },

  // The c4 detonator sends at a specified time.
  c4_detonator: (time) => {
    var fixed_time = utils.fix_time(time);

    while (true) {
      if (utils.check_time(fixed_time)) {
        utils.fire();
        break;
      }
    }
  },

  // The sniper rifle sends mutiple messages to multiple people.
  sniper_rifle: (messages, people) => {
    people = people.map((el, i, arr) => arr[i] = '+' + arr[i]);

    for (var i = 0; i <= messages.length; i++) {
      text.toNumber = people[i];
      utils.fire(messages[i]);
    }
  },

  //----------------------------------------
  // Add your own tools to the arsenal here.
  //----------------------------------------
}