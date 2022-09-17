import NavBar from '../components/NavBar'
import '../styles/globals.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <NavBar />
      <Component {...pageProps} />
    <Footer />
  </>
  
}

export default MyApp
