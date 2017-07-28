# Chatty

Full stack single page chatroom webapp built using [ExpressJS](http://expressjs.com/), [ReactJS](https://facebook.github.io/react/), and [Websocket](http://www.websocket.org/)

## Screenshots

Welcome to Chatty!

![Screenshot 1](https://raw.githubusercontent.com/kaichesterni/chatty/master/screenshots/1.png)

Hi James!

![Screenshot 2](https://raw.githubusercontent.com/kaichesterni/chatty/master/screenshots/2.png)

Hi Anonymous!

![Screenshot 3](https://raw.githubusercontent.com/kaichesterni/chatty/master/screenshots/3.png)

## Features

* User count - the Chatty express server keeps track of the total users online, and broadcasts live updates to all clients when the count changes
* User colors - each user is assigned a randomly generated color on each session. If a user changes their username, they will still have to same color
* Username change notifications - notifications are sent whenever a user changes their username. These are sent by the system under the username 'Chatty' and are italicized
* Audio notifications - a [notification sound](https://notificationsounds.com/message-tones/get-outta-here-505/download/mp3) is played whenever a message is received, unless it is a system-sent username change messages
* Chatbar
  * Username - users can change their username in the username input box, which gets saved when the user clicks out of the input (onBlur)
  * Message - users can type messages of any length greater than 0 into the text box and press `ENTER` to send the message. If a user tries to send a message with no length, nothing will happen
  * Send button - Alternatively users can press the send button to send messages
  * Clear button - Clears chat history for the user, but not for other users

## Upcoming

* Emoticons - send emoticons by sending `:<emoticon name>:` where `<emoticon name>` is the name of the emoticon the user wants to send
* Stylized messages - send bold and italic messages by sending `/bold <message>` and `/italic <message>`, respectively
* URLs - if a user sends a URL, Chatty will convert it to a clickable hyperlink
* Image sending - if a user sends a URL linking to an image (for example ending with `.jpg` `.png` `.bmp`), Chatty will attempt to display the image instead of the link
* [Giphy](https://giphy.com/) - send random gifs by sending the message `/giphy-random` or search for gifs by sending `/giphy-search <query>` where `<query>` is what the user wants to search for

## Project Stack

* [BabelJS](https://babeljs.io/)
* [ExpressJS](http://expressjs.com/)
* [NodeJS](https://nodejs.org/en/)
  * [Node-SASS](https://github.com/sass/node-sass)
  * [Node-UUID](https://github.com/broofa/node-uuid)
* [ReactJS](https://facebook.github.io/react/)
* [Webpack](https://webpack.js.org/)
  * [CSS-Loader](https://github.com/webpack-contrib/css-loader)
  * [SASS-Loader](https://github.com/webpack-contrib/sass-loader)
* [Websocket](http://www.websocket.org/)

## Getting Started

* Fork and clone this repository
* Install all dependencies using `npm install`
* Start the chatty express server by running `npm run server`
* Start the chatty dev server by running `npm start`
