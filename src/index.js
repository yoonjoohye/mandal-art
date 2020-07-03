import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

console.log(
  '%c개발자 주스🥤',
  'background-color:#4093fb; color:white; font-size:50px;'
);
console.log(
  '%c나쁜짓은 하지 마세요!!!',
  'text-shadow:0 0 1px black; color:#ff83a8; font-size:15px;'
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
