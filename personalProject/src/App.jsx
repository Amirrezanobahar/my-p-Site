import './App.css'
import 'react-scroll'
import Section from './components/Section'
import Navbar from './components/Navbar'
import HomeContent from './components/HomeContent'
import AboutMe from './components/AboutMe'
import Value from './components/Value'
import MeService from './components/MeService'
import Txt from './components/Txt'
import DesignContent from './components/DesignContent'
import Creativity from './components/Creativity'
import PricingPlans from './components/PricingPlans'
import ContactForm from './components/Contact'


function App() {

  return (
    <>
      <div className='app'>

        <Navbar />

        <Section id="home" title="">
          <HomeContent />
        </Section>

        <Section id="aboutMe" title="">
          <AboutMe />
        </Section>
        <Section id="value" title="">
          <Value />
        </Section>
        <Section id="meService" title="">
          <MeService />
        </Section>
        <Section id="txt" title="">
          <Txt />
        </Section>
        <Section id="designContent" title="">
          <DesignContent/>
        </Section>
        <Section id="creativity" title="">
         <Creativity/>
        </Section>
        <Section id="pricingPlans" title="">
         <PricingPlans/>
        </Section>
        <Section id="contactForm" title="">
         <ContactForm/>
        </Section>

      </div>


    </>
  )
}

export default App
