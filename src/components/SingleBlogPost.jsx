import React from 'react'

const SingleBlogPost = (props) => {
  let url = window.location.pathname

  let post = props.blogPosts.filter((post, i) => {
    return props.blogPosts[i].url === url
  })

  console.log('props in the single post: ', post)
  if (!post[0]) return <h1>Error 404!</h1>

  return (
    <div className='blog-page'>
      <div className='banner'>
      <h1 className='blog-title'>{post[0].banner.blog_title}</h1>
      <img className='banner-img' src={post[0].banner.banner_image.url}/>
      </div>
      <p className='blog-copy'>{post[0].blog_post_body.copy}</p>
    </div>
  )
}

export default SingleBlogPost;