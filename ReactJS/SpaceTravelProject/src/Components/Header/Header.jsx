import './Header.css'
import bgImage from '../../assets/earthImage.jpg'

const Header = ({heading}) => {
  return (
    <section className="header"
        style={{backgroundImage:`url(${bgImage})`, backgroundSize:'cover', backgroundPosition:'fixed'}}>
        <h1>{heading} </h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga consequuntur porro, voluptatum reprehenderit libero quia laborum illo quam quas? Ratione, praesentium! Provident quod ut consequuntur doloribus blanditiis voluptates numquam explicabo?

        </p>
    </section>
  )
}

export default Header