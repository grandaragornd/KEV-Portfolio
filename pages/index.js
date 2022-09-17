import Header from '../components/Header'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return <>
    <Layout title='Kevin Portofolio' />
    <Header />
    <div className='static border-b border-gray-300 my-4 py-3'></div>
    <Projects/>
    <div className='static border-b border-gray-300 my-4 py-3'></div>
    <Skills />
  </>
  
}
