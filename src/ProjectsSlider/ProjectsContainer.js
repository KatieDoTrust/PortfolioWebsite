import ProjectCard from "./ProjectCard"
function ProjectsContainer() {

    const projectData = [
      {id: 1, title: 'Woofing From Home', content: 'Capstone project at CodeClan. Connecting dog owners in the hybrid working era.', imgUrl: 'https://unsplash.it/200/200'},
      {id: 2, title: 'Biology Education', content: 'Javascript project at CodeClan. Full stack education app with quizzes', imgUrl: 'https://unsplash.it/201/200'},
      {id: 3, title: 'Gym Management', content: 'Python project at CodeClan. Full stack app for gym employees', imgUrl: 'https://unsplash.it/200/201'},
      {id: 4, title: 'Cake Recipes', content: 'Tasty first mini React project', imgUrl: 'https://unsplash.it/201/201'}
    ]
  
    const projects = projectData.map((project) => {
      return <ProjectCard title={ project.title }
      content={ project.content }
      imgUrl={ project.imgUrl } />
    })

  
    return (
      <div className="projects-slider">{projects}</div>
    )
  }
  
  export default ProjectsContainer
  