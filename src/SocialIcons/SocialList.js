import SocialIcon from "./SocialIcon"

function SocialList() {

    const socialList = [    
        {name: "GitHub", icon:"",url:""},
        {name: "LinkedIn", icon:"", url:""},
        {name: "Email", icon:"", url:""}
    ]
    
    const names = socialList.map(social=> {
      return <SocialIcon 
        name={social.name}
      />})

  return (
    <div className="socialIcons">{names}</div>
  )
}

export default SocialList