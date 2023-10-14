import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Player from './components/Player'
import {
  Routes,
  Route,
} from "react-router-dom";
import { data } from './shared/ListOfPlayer';
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Player />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
