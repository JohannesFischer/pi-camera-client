import { h, Component } from 'preact';
import style from './style';
import Config from '../../config';

export default class Video extends Component {
  render() {
    return (
      <video class={style.video} controls>
        <source src={Config.stream.demo} type={Config.stream.type}/>
      </video>
    );
  }
}
