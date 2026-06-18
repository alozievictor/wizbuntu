// import FeaturedWork from '../components/SubComponent/FeaturedWork';
import Footer from '../components/SubComponent/Footer';
import HowWeBuild from '../components/SubComponent/HowWeBuild';
import Hero from '../components/SubComponent/Hero';
import MarqueeStrip from '../components/SubComponent/MarqueeStrip';
import Navbar from '../components/SubComponent/Navbar';
import ScrollReveal from '../components/Ui/ScrollReveal';
import WhatWeDo from '../components/SubComponent/WhatWeDo';


const Home = () => {
  return (
    <>
      <Navbar />
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <MarqueeStrip />
      </ScrollReveal>
      {/* <ScrollReveal>
        <FeaturedWork />
      </ScrollReveal> */}
      <ScrollReveal>
        <WhatWeDo />
      </ScrollReveal>
      <ScrollReveal>
        <HowWeBuild />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </>
  )
}

export default Home;
