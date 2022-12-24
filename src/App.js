import Navbar from './Components/Navbar/Navbar';
import './GlobalStyles.css';
import { themeContext } from './Context';
import { useContext } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import UpTo from './Components/UpTo/UpTo';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background : darkMode? '#0F0F0F' : '',
        color: darkMode? 'white' : '',
      }}
    >
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <UpTo/>
      <Footer/>
    </div>
  );
}

export default App;
