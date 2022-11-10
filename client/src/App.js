import Home from '../src/pages/user/home'
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
import Login from './pages/user/login';
import Signup from './pages/user/signup';
import Adminlogin from './pages/admin/adminloginpage';
import Admindash from './pages/admin/admindashpage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/admin' element={<Adminlogin/>}/>
          <Route path='/admindashboard' element={<Admindash/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
