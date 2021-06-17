import React from 'react';
import BlogPostTile from './BlogPostTile';

const BlogPostList = (props) => {
  return (
    <div className='grid'>
    {props.blogPosts.map((post, key) => (
      <BlogPostTile key={post.uid} post={post}/>
    ))}
  </div>
  )
}

export default BlogPostList;