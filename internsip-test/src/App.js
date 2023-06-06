import './App.css';

import First from '../src/components/first/first'
import Summary from '../src/components/second/second'
import {

  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
