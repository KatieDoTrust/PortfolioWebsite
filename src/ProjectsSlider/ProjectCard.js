function ProjectCard({title, content, imgUrl, projectUrl}) {
    return (
      <>
      <a href={projectUrl} className="project-links">
          <div className="project-card">
            <img src={imgUrl } 
              alt={'Image' } />
            <div className="card-content">
              <h2>{ title }</h2>
              <p>{ content }</p>
            </div>
          </div>
          </a>
       </>
    )
  }
  
  export default ProjectCard