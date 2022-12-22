

function SocialIcon({icon, url}) {
  return (
    <>
    <a href={url} className="social-icon">
    <div className="social-icon">{icon}</div>
    </a>
    </>
  )
}

export default SocialIcon
