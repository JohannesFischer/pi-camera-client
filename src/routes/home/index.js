import { h, Component } from 'preact';
import style from './style';
import Button from '../../components/button';
import Video from '../../components/video';
import { socket } from '../../lib/ws-client';

export default class Home extends Component {
  // @bind

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.sendMessage = this.sendMessage.bind(this);
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

  render({}, { count }, { coount }) {
    return (
      <div class={style.home}>
        <Video />
        <Button clickEvent={this.sendMessage} text="Send Message" />
        <p>Messages sent: {count}</p>
      </div>
    );
  }
}
