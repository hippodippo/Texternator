const puretext = require('puretext');
const dateFormat = require('dateformat');
const text = require('./text');

module.exports = {

  chop: function chop(date) {
    let split_date = date.split('')
      , time = [];

    for (var i = split_date.length; split_date[i] !== ','; i--) {
      time.push(split_date[i]);
    }

    time.pop();

    return time.reverse().join('');
  },

  fix_time:  function fix_time(time) {
    let fixed_time = time.split(' ');

    fixed_time[fixed_time.length-1] = fixed_time[fixed_time.length-1].toUpperCase();

    return fixed_time.join(' ');
  },

  get_current_time:  function get_current_time() {
    return this.chop(dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM TT"));
  },

  check_time:  function check_time(time) {
    return this.get_current_time() === time ? true : false;
  },

  fire:  function fire(message=null) {
    if (message) text.smsBody = message;

    puretext.send(text, function (err, response) {
      err ? console.log(err) : console.log('Success');
    });
  }
};