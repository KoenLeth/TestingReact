import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://memepedia.ru/wp-content/uploads/2018/06/cover-2-2-768x507.jpg" />
    <div>
      <div className={s.PostText}>{props.messages}</div>
      <span>Like+1 {props.likes}</span>
    </div>
    </div>
  )
}

export default Post;
