![Logo](/assets/texternator.png)

## A toolkit for programmatically sending texts.

Currently the Texternator ToolKit consists of 4 pre-built methods.

Build your own arsenal for Texternator by adding new methods to the bottom of the arsenal.js file.

To use Texternator follow these steps:
1. Download zip file or clone repo.
2. Run ```npm install``` or ```npm run setup``` to install the dependencies.
3. Go create get your api_token and number from [PureText](https://www.puretext.us/auth/google).
4. Open the text.js file and paste in your api_token and PureText number where it says to put them.
5. Change the default smsBody in text.js to what you want to send and change the target phone number.
6. Navigate to the index.js file and uncomment the examples.
7. After uncommenting the examples, replace the args with your friend's number or some other number.
8. In the terminal at the root of the project, run ```node index.js``` and the message(s) will be sent.

The example usage of the functions are shown below:

```js
// Sends a text at the specified time.
c4_detonator('9:45 pm');

// Sends multiple texts to a single person.
// This one can be fun when you start using bigger numbers. :)
mini_gun(3);

// Sends a text to multiple people.
// The plus signs are not needed for numbers. The shot_gun function adds them for you.
shot_gun(['6747648877', '7658976574']);

// Sends precise messages to precise numbers.
sniper_rifle(['Hello Person1', 'Hello Person2'], ['6757867654', '8765679876']);
```

Cheers, Kaycee Ingram
