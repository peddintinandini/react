import logo from './logo.svg';
import './App.css';
import About from './about/about';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
  
      <Routes>
      <Route path = "/" element = {<About/>}/>
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
