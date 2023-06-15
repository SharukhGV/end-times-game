import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Board from './Components/Board';
import Home from './Components/Home';
import Nav from './Components/Nav';
function App() {
  return (
    <div className="App">
     <Router>

<Nav/>
<Routes>
<Route path="/" element={<Home/>}></Route>

<Route path="/board" element={<Board/>}></Route>

</Routes>


     </Router>
    </div>
  );
}

export default App;
