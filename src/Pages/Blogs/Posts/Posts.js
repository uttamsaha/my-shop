import React, { useEffect, useState } from 'react'
import SinglePost from '../SinglePosts/SinglePost';
import './Posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
  return (
    <div className='post-container'>
        <h1>All Posts</h1>
        <div className="posts">
            {
                posts.map(post => <SinglePost key={post.id} post={post}></SinglePost>)
            }
        </div>
    </div>
  )
}

export default Posts;