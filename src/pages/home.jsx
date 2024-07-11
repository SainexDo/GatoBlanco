import CafeP from '../components/boxCafeP'
import BebidasFriasP from '../components/bebidasFriasP'
import AlmuerzosP from '../components/almuerzosP'
import DesayunoP from '../components/desayunoP'
import ExpressosP from '../components/expressosP'
import PostresP from '../components/postresP'
import SaladosP from '../components/saladosP'
import TortasP from '../components/tortasP'
import Nav from '../components/nav'
import BuscarProductsHome from '../components/buscarProductsHome'
import Footer from '../components/footer'


const Home = () => {
  return (
    <>
    <Nav/>  
    <div id='imageProduct'><img id='divImageProduct' src="https://tofuu.getjusto.com/orioneat-local/resized2/yGHnouy2rKEAvrX9Y-x-1600.webp" alt="" title=""/></div>
    <BebidasFriasP/>
    <BuscarProductsHome/>
    {/* <Footer/> */}
    </>
  )
}

export default Home