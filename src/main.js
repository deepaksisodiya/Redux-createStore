/**
 * Created by deepaksisodiya on 11/12/15.
 */

// reducer in redux
// pure function
function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  } else if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}

var createStore = require('redux').createStore;
// import { createStore } from 'redux';

var store = createStore(counter);

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT'});
});

const render = () => {
  document.body.innerText = store.getState();
};

// whenever there is a state changes then this method is called
store.subscribe( () => {
  render();
});

window.onload = () => {
  render();
};