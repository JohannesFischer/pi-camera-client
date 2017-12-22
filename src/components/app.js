import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux';
// import { syncHistoryWithStore, routerReducer } from 'preact-router-redux';
import store from '../lib/store';
import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import { socket } from '../lib/ws-client';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

// const store = createStore(
//   combineReducers({
//     ...reducers,
//     routing: routerReducer
//   })
// )

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {

  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  constructor() {
    super();

    socket.onopen = () => {
      socket.send(JSON.stringify({
        message: 'Hello',
        type: 'message'
      }));
    };
  }

  render() {
    return (
      <div id="app">
        <Provider store={store}>
          <Header />
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Profile path="/profile/" user="me" />
            <Profile path="/profile/:user" />
          </Router>
        </Provider>
      </div>
    );
  }
}
