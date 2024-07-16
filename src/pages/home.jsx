import BebidasFriasP from '../components/bebidasFriasP'
import Nav from '../components/nav'
import BuscarProductsHome from '../components/buscarProductsHome'
import About from '../components/about/about'
import Footer from '../components/footer/footer'


const Home = () => {
  return (
    <>
    <Nav/>  
    <div id='imageProduct'><img id='divImageProduct' src="https://tofuu.getjusto.com/orioneat-local/resized2/yGHnouy2rKEAvrX9Y-x-1600.webp"/></div>
    <BebidasFriasP/>
    <BuscarProductsHome/>
    <About/>
    <Footer/>
    </>
  )
}

export default Home