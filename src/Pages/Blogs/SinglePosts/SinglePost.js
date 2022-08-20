import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SinglePost.css';

const SinglePost = (props) => {
  const {id,title, body} = props.post;
  const navigate = useNavigate();

  const postDetails = (id) => {
    const path = `/posts/${id}`;
    navigate(path);
  }
  return (
    <div className='singlePost'>
      <h3>Title: {title.slice(0,30)}</h3>
      <p>{body.slice(0,100)}...</p>
      <button onClick={()=>{postDetails(id)}}>Read More</button>
    </div>
  )
}

export default SinglePost ;