import { createStore } from 'redux';

const actions = {};

const initialState = {
  data: {}
};

export default createStore((state, action) => (
  action && actions[action.type] ? actions[action.type](state, action) : state
), initialState, window.devToolsExtension && window.devToolsExtension());
