import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://the-geek.ru/wp-content/uploads/2018/01/anonymous_web-thumb-large.jpg' />
      { props.message }
      <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  );
}

export default Post;