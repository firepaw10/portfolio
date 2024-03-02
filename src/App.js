import logo from './logo.svg';
import './App.css';

// Components
import { NavBar } from './components/NavBar';
import { NewMotion } from './components/Animation';
import { ModalPopup } from './components/Modal';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import ScrollingText from './components/ScrollingText';


function App() {
  return (
      <div className="App">
        <NewMotion></NewMotion>
        <NavBar></NavBar>
        <Banner></Banner>
        <Skills></Skills>
        <Contact></Contact>
        <ScrollingText></ScrollingText>
        <ModalPopup title="Modal Test!" body="Woohoo, you are reading this text in a modal!"></ModalPopup>
    </div>
  );
}

export default App;
