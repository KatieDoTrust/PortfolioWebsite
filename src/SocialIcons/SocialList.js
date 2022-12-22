import SocialIcon from "./SocialIcon"
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'

function SocialList() {

    const socialList = [    
        {name: "GitHub", icon: <FaGithub/>, url:"https://github.com/katiebooth"},
        {name: "LinkedIn", icon : <FaLinkedin/>, url:"https://www.linkedin.com/in/katie-booth-598995159/"},
        {name: "Email", icon: <MdMailOutline/>, url:"https://www.google.co.uk/"}
    ]
    
    const icons = socialList.map(social=> {
      return <SocialIcon 
        icon={social.icon}
        url={social.url}
      />})

    console.log(icons)
  return (
    <div className="socialIcons">{icons}</div>
  )
}

export default SocialList