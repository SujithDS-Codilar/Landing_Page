
import Main_Content from './Components/Main_Content';
import Nav_Bar from './Components/Nav_Bar';
import Body from './Components/Body';
import Feedback from './Components/Feedback';
import './App.css';
import Footer_Text from './Components/Footer_Text';
import Footer from './Components/Footer';

function App() {
  return (
    
    <div className="App">
      
      <Nav_Bar />
      <Main_Content />
      <Body />
      <Feedback />
      <Footer_Text />
      <Footer />
    </div>
    
  );
}

export default App;
