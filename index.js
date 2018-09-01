// Powered by Node.js and PureText.
// Author: Kaycee Ingram

const utils = require('./utils')
              require('request');

// The Arsenal
// ------------

// The shotgun sends to multiple people.
function shot_gun(message=null, people) {
  if (typeof message === 'object') {
    people = message,
    message = null;
  }

  people = people.map((el, i, arr) => arr[i] = '+' + arr[i]);

  for (var i = 0; i < people.length; i++) {
    text.toNumber = people[i];

    utils.fire(message);
  }
}

// The minigun sends multiple to a single person.
function mini_gun(message=null, amount) {
  if (typeof message === 'number') {
    amount = message,
    message = null;
  }

  for (var i = 0; i <= amount; i++) {
    utils.fire(message);
  }
}

// The c4 detonator sends at a specified time.
function c4_detonator(time) {
  var fixed_time = utils.fix_time(time);

  while (true) {
    if (utils.check_time(fixed_time)) {
      utils.fire();
      break;
    }
  }
}

// Examples
// --------

// Check the time and change the time below 1 min ahead and wait.
// c4_detonator('9:45 pm');

// This one can be fun when you start using bigger numbers. :)
// mini_gun(3);

// The plus signs are not needed for numbers. The shot_gun function adds them for you.
// shot_gun(['6747648877', '7658976574']);