![Logo](/assets/texternator.png)

## A toolkit for sending texts.

Currently the Texternator ToolKit consists of 3 pre-built functions.

To use Texternator follow these steps:
1. Download zip file or clone repo.
2. Run ```npm install``` or ```npm run setup``` to install the dependencies.
3. Go create get your api_token and number from [PureText](https://www.puretext.us/auth/google).
4. Open the text.js file and paste in your api_token and PureText number where it says to put them.
5. Change the default smsBody in file.js to what you want to send and the target phone number.
6. Navigate to the index.js file and scroll to the bottom.
7. Uncomment the examples and replace the args with your friend's number or some other number.
8. In the terminal at the root of the project, run ```node index.js``` and the message(s) will be sent.

The example usage of the functions are shown below:

```js
// Check the time and change the time below 1 min ahead and wait.
c4_detonator('9:45 pm');

// This one can be fun when you start using bigger numbers. :)
mini_gun(3);

// The plus signs are not needed for numbers. The shot_gun function adds them for you.
shot_gun(['6747648877', '7658976574']);
```

Cheers, Kaycee Ingram