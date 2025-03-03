import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {

  return (
    <footer>
      <h1>Space Travel</h1>

      <div className="links">
        <h3>Useful Links</h3>
        <div className="link">
          <Link to='/'>Home</Link>
          <Link to='/pricing'>Pricing</Link>
          <Link to='/training'>Training</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>

      <div className="social">
        <a href='https://www.facebook.com/'><FaFacebook /></a>
        <a href='https://www.instagram.com/'><FaInstagram /></a>
        <a href='https://x.com/home/'><FaTwitter /></a>
      </div>
    </footer>
  )
}

export default Footer