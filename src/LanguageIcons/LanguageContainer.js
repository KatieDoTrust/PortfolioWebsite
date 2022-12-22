import {FaReact, FaPython, FaJava} from 'react-icons/fa'
import {SiJavascript, SiPostgresql, SiMongodb} from 'react-icons/si'
import LanguageIcon from './LanguageIcon'

function LanguageContainer() {
    
    const languages = [
        {name: "React", img: <FaReact/>},
        {name: "Javascript", img: <SiJavascript/>},
        {name: "Python", img: <FaPython/>},
        {name: "Java", img: <FaJava/>},
        {name: "PostgreSQL", img: <SiPostgresql/>},
        {name: "MongoDB", img: <SiMongodb/>}
    ]

    const iconsList = languages.map((language)=>{
        return <LanguageIcon
            icon = {language.img} 
        />
    })
  return (<div className="language-icons-container">{iconsList}</div>
    
  )
}

export default LanguageContainer