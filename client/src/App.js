import Home from '../src/pages/user/home'
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
import Login from './pages/user/login';
import Signup from './pages/user/signup';
import Adminlogin from './pages/admin/adminloginpage';
import Admindash from './pages/admin/admindashpage';
import Adminuserlistpage from './pages/admin/adminuserlistpage';
import Adminpostmanagepage from './pages/admin/adminpostmanagepage';
import Admininboxpage from './pages/admin/admininboxpage';
import Admincoursemanagepage from './pages/admin/admincoursemanagepage';
import Feedpage from './pages/user/feedpage';
import Profilepage from './pages/user/profilepage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* User routes */}
          <Route path='/' element={<Home/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/feed' element={<Feedpage/>}/>
          <Route path='/profile' element={<Profilepage/>}/>
          {/* Admin routes */}
          <Route path='/admin' element={<Adminlogin/>}/>
          <Route path='/admindashboard' element={<Admindash/>}/>
          <Route path='/adminuserlist' element={<Adminuserlistpage/>}/>
          <Route path='/adminpostmanage' element={<Adminpostmanagepage/>}/>
          <Route path='/admininbox' element={<Admininboxpage/>}/>
          <Route path='/admincoursemanage' element={<Admincoursemanagepage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
