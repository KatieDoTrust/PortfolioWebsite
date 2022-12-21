function ProjectCard({title, content, imgUrl}) {
    return (
          <div className="project-card">
            <img src={imgUrl } 
              alt={'Image' } />
            <div className="card-content">
              <h2>{ title }</h2>
              <p>{ content }</p>
            </div>
          </div>
    )
  }
  
  export default ProjectCard