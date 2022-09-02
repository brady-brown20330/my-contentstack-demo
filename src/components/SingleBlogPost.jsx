import React from 'react'

export const SingleBlogPost = (props) => {
  let url = window.location.pathname
  
  let post = props.blogPosts.filter((post, i) => {
    return props.blogPosts[i].url === url
  })

  console.log('One Single Blog Post: ', props)

  if (!post[0]) return <h1>Error 404!</h1>

  let modularPost = post[0].modular_blocks
  return (
    <div className='blog-page'>
      <div className='banner' 
           style={{
             backgroundImage: `url(${post[0].banner.banner_image.url})`}}>
        <h1 className='blog-title'>{post[0].banner.blog_title}</h1>
      </div>
      <div className='blog-copy'>
        {
          modularPost.map((item, i) => {
            if (modularPost[i]['paragraph']) {

              if (Array.isArray(modularPost[i].paragraph.paragraph_text)) {
                return modularPost[i].paragraph.paragraph_text.map((block) => <p key={i} className='blog-paragraph'>{block}</p>)
              } else {
                return (
                <p className='blog-paragraph' key={modularPost[i].paragraph._metadata.uid}>{modularPost[i].paragraph.paragraph_text[0]}</p>
              )
              }
              
            } else if (modularPost[i]['headers']) {
              return (
                <h2 className='blog-header' key={modularPost[i].headers._metadata.uid}>{modularPost[i].headers.header}</h2>
              )
            } else if (modularPost[i]['image']) {
              return (
                <img className='blog-image' key={modularPost[i].image._metadata.uid} src={modularPost[i].image.image.url} alt={modularPost[i].image.image.description}/>
              )
            }
          })}
      </div>
    </div>
  )
}