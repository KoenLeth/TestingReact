import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {return(
<div className={s.item}>
<div>
  my posts
  <div>
    <textarea></textarea>
    <button>New Post</button>
    </div>
 </div>
 <Post messages="hi all i'm from space" likes="15"></Post>
 <Post messages="Hi to the Earth" likes="99999"></Post>
</div>
)
}

export default MyPosts;
