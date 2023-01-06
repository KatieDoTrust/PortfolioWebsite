import {FaReact, FaPython, FaJava} from 'react-icons/fa'
import {SiJavascript, SiPostgresql, SiMongodb} from 'react-icons/si'
import LanguageIcon from './LanguageIcon'

function LanguageContainer() {
    
    const languages = [
        {name: "React", img: <FaReact size={30}/>},
        {name: "Javascript", img: <SiJavascript size={30}/>},
        {name: "Python", img: <FaPython size={30}/>},
        {name: "Java", img: <FaJava size={30}/>},
        {name: "PostgreSQL", img: <SiPostgresql size={30}/>},
        {name: "MongoDB", img: <SiMongodb size={30}/>}
    ]

    const iconsList = languages.map((language, index)=>{
        return <LanguageIcon
            icon = {language.img} 
            key={index}
        />
    })
  return (<div className="language-icons-container">{iconsList}</div>
    
  )
}

export default LanguageContainer