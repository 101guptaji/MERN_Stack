import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import PriceCards from './PriceCards'
import './Pricing.css';

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <Header heading="Pricing"/>
      <PriceCards />
      <Footer />
    </div>
  )
}

export default Pricing