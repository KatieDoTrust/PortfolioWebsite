import ProjectCard from "./ProjectCard"
function ProjectsContainer() {

    const projectData = [
      {id: 1, title: 'Woofing From Home', content: 'Capstone project at CodeClan. Connecting dog owners in the hybrid working era.', imgUrl: '/wfh_screenshot.jpeg', projectUrl: "https://woofingfromhome.com/"},
      {id: 2, title: 'Biology Education', content: 'Javascript project at CodeClan. Full stack education app with quizzes and comment board.', imgUrl: '/js_project_screenshot.jpeg', projectUrl:"https://github.com/katiebooth/Javscript_Education_App"},
      {id: 3, title: 'Gym Management', content: 'Python project at CodeClan. Full stack app for gym employees to manage bookings.', imgUrl: '/python_screenshot.jpeg', projectUrl: "https://github.com/katiebooth/Python_Flask_Project_Gym_App"},
      {id: 4, title: 'Cake Recipes', content: 'Tasty first mini React project to practice APIs.', imgUrl: '/cake_recipes_screenshot.jpeg',projectUrl: "https://github.com/katiebooth/Cake_Recipe_App_React_API" }
    ]
  
    const projects = projectData.map((project) => {
      return <ProjectCard title={ project.title }
      content={ project.content }
      imgUrl={ project.imgUrl }
      projectUrl={project.projectUrl} />
    })

  
    return (
      <div className="projects-slider">{projects}</div>
    )
  }
  
  export default ProjectsContainer
  