import { h, Component } from 'preact';
import style from './style';
import Button from '../../components/button';
import Video from '../../components/video';
import { socket } from '../../lib/ws-client';

import { connect } from 'preact-redux';
import { bindActions } from '../../lib/util';
import reduce from '../../lib/reducers';
import * as actions from '../../lib/actions';

@connect(reduce, bindActions(actions))

export default class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0
  //   };

  //   this.sendMessage = this.sendMessage.bind(this);
  // }

  doStuff() {
    this.props.doStuff();
  }

  sendMessage(e) {
    const msg = {
      count: this.state.count,
      text: 'My message',
      type: 'message'
    };

    socket.send(JSON.stringify(msg));

    this.setState({
      count: this.state.count + 1
    });
  }

  render({}, { count }) {
    return (
      <div class={style.home}>
        <Video />
        <Button clickEvent={this.doStuff} text="Send Message" />
        <p>Messages sent: {count}</p>
      </div>
    );
  }
}
