import React from 'react'

const SingleBlogPost = (props) => {
  let url = window.location.pathname
  
  let post = props.blogPosts.filter((post, i) => {
    return props.blogPosts[i].url === url
  })
  console.log('One Single Blog Post: ', post[0])
  
  if (!post[0]) return <h1>Error 404!</h1>

  return (
    <div className='blog-page'>
      <div className='banner' 
           style={{
             backgroundImage: `url(${post[0].banner.banner_image.url})`}}>
        <h1 className='blog-title'>{post[0].banner.blog_title}</h1>
      </div>
      <div className='blog-copy'>
        {
          post[0].modular_blocks.map((item, i) => {
            console.log(post[0].modular_blocks[i])
            if (post[0].modular_blocks[i]['paragraph']) {
              return (
                <p>{post[0].modular_blocks[i].paragraph.paragraph_text[0]}</p>
              )
            } else if (post[0].modular_blocks[i]['headers']) {
              return (
                <h2>{post[0].modular_blocks[i].headers.header}</h2>
              )
            }
          })}
      </div>
    </div>
  )
}

export default SingleBlogPost;