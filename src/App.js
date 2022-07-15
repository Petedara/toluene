import Home from './Component/Home/Home';
import Nichebody from './Component/Newsniche/Nichebody';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/soccer' element={<Nichebody />}> </Route>
          <Route path='/Basketball' element={<Nichebody />}> </Route>
          <Route path='/Cricket' element={<Nichebody />}> </Route>
          <Route path='/WWE' element={<Nichebody />}> </Route>
          <Route path='/Boxing' element={<Nichebody />}> </Route>
          <Route path='/Golf' element={<Nichebody />}> </Route>
          <Route path='/volleyball' element={<Nichebody />}> </Route>
          <Route path='/Hockey' element={<Nichebody />}> </Route>
          <Route path='/Rugby' element={<Nichebody />}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
