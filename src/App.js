import logo from "./logo.svg";
import Frontend from "./Frontend";

import Website from "./Website";
import Register from "./Register";
import {BrowserRouter as Router,
  Link ,
  Routes, Route
} from 'react-router-dom'
import Header from "./Header";
import Login from './Login';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        
        <Routes>
          
          <Route exact path='/' element={<Website />} />
          <Route path='/register' element={<Register/> } />
          <Route path='/login' element={<Login/> } />
          
          
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
