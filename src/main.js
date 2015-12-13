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

/*// this is the implementation of createStore method
const createStore = (reducer) => {
  "use strict";
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};*/

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