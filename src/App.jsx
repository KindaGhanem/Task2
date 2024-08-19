
import './App.css'
import Footer from './component/Footer/Footer'
import Hero from './component/Hero/Hero'
import NavBarr from './component/NavBarr/NavBarr'
import Section2Featured from './component/Section2Featured/Section2Featured'
import Section3VideoView from './component/Section3VideoView/Section3VideoView'
import Section4Number from './component/Section4Number/Section4Number'
import Section5BestDeal from './component/Section5BestDeal/Section5BestDeal'
import Section6Properties from './component/Section6Properties/Section6Properties'
import Section7ContactUs from './component/Section7ContactUs/Section7ContactUs'
import TopNavBar from './component/TopNavBar/TopNavBar'


function App() {

  return (
    <>
    <TopNavBar />
    <NavBarr />
    <Hero />
    <Section2Featured />
    <Section3VideoView />
    <Section4Number />
    <Section5BestDeal />
    <Section6Properties />
    <Section7ContactUs />
    <Footer />
    </>
  )
}

export default App
