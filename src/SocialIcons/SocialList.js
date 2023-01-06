import SocialIcon from "./SocialIcon"
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'

function SocialList() {

    const socialList = [    
        {name: "GitHub", icon: <FaGithub size={35}/>, url:"https://github.com/katiebooth"},
        {name: "LinkedIn", icon : <FaLinkedin size={35}/>, url:"https://www.linkedin.com/in/katie-booth-598995159/"},
        // {name: "Email", icon: <MdMailOutline size={35} />, url:"https://www.google.co.uk/"}
    ]
    
    const icons = socialList.map((social, index) => {
      return <SocialIcon 
        icon={social.icon}
        url={social.url}
        key={index}
      />})

  return (
    <div className="socialIcons">{icons}</div>
  )
}

export default SocialList