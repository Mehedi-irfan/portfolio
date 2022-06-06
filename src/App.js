import Header from "./Component/Header/Header";
import Nav from './Component/Nav/Nav';
import About from './Component/About/About';
import Experiance from './Component/Experiance/Experiance';
import Services from './Component/Services/Services';
import Portfolio from './Component/Portfolio/Portfolio';
import Testimonial from './Component/Testimonial/Testimonial';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
