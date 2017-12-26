// var Greeting = React.createClass({
//   render: function() {
//     return (
//       React.createElement('h1', null, 'Hello, world!')
//     );
//   }
// });

// window.addEventListener('load', function() {
//   React.render(
//     React.createElement(Greeting, null),
//     document.body
//   );
// });

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);