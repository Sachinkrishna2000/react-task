import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import CarouselImage from './Component/Carouselimage';
import Cards from './Component/Cards';
import FormMain from './Component/FormMain';
import Info from './Component/Info';
import InformationCard from './Component/InformationCard';
import Footer from './Component/Footer';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <CarouselImage/>
      <Cards/>
      <InformationCard/>
      <Info/>
      <FormMain/>
      <Footer/>
      
    </div>
  );
}

export default App;
