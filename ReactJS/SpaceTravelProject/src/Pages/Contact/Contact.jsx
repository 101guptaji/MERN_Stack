import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Form from './Form'
import './ContactStyles.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Header heading="Contact Us"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact