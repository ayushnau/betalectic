import '../styles/globals.css'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
   
  )
}

export default MyApp