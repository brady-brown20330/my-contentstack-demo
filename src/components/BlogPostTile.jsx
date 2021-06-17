import React from 'react';

const BlogPostTile = (props) => {
  let copyPreview = props.post.blog_post_body.copy.substring(0, 50)
  return (
    <div className='tile'>
      <img className='tile-img' src={props.post.banner.banner_image.url} />
      <h3 className='tile-title'>{props.post.banner.blog_title}</h3>
      <div className='tile-copy-preview'>{copyPreview}...</div>
      <a href={props.post.url}>Read More...</a>
    </div>
  )
}

export default BlogPostTile;