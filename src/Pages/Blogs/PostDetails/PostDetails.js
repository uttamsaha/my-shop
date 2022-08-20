import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = () => {
    const {postID} = useParams();
    const [post, setPost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[postID])
  return (
    <div className='postDetails'>
        <h1>Post Details</h1>
        <div className='post'>
            <h3>Title: {post.title}</h3>
            <p>{post.body}</p>
        </div>
    </div>
  )
}

export default PostDetails;