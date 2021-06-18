import React from 'react'

const SingleBlogPost = (props) => {
  let url = window.location.pathname

  let post = props.blogPosts.filter((post, i) => {
    return props.blogPosts[i].url === url
  })

  console.log('props in the single post: ', post)
  return (
    <div>
      <h1>{post[0].banner.blog_title}</h1>
      <img src={post[0].banner.banner_image.url}/>
      <p>{post[0].blog_post_body.copy}</p>
    </div>
  )
}

export default SingleBlogPost;