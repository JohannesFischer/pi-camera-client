import { h, Component } from 'preact';
import style from './style';

export default class Button extends Component {
  render({ clickEvent, text }) {
    return (
      <button class={style.button} onClick={clickEvent}>
        {text}
      </button>
    );
  }
}
