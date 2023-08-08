import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Signup from './components/Signup';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<div>Log in</div>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

