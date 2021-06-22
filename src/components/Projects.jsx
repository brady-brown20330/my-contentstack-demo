import React from 'react'

const Projects = (props) => {
  return (
    <div style={{display: 'inline-block'}}>
      <h1>My Projects:</h1>
      {
        props.projects.map((project) => {
          return (
            <a className='project-tile' href={project.project_link.href} target='_blank' rel="noreferrer">
              <img className='project-img' src={project.tile_image.url} alt={`Asset for ${project.title}`}/>
            </a>
          )
        })
      }
    </div>
  )
}

export default Projects;