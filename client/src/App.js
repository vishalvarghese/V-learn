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
import Chatboxpage from './pages/user/chatboxpage';
import Test from './components/user/test';
import Gallerypage from './pages/user/gallerypage';
import Courseviewpage from './pages/user/courseviewpage';
import AddCourse from './pages/user/addCourse';
import Connectionpage from './pages/user/connectionpage';
import Otherprofilepage from './pages/user/otherprofilepage';
import CourseListPage from './pages/user/courseListPage';
import AdminReportManagepage from './pages/admin/adminReportManagePage'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/test' element={<Test/>}/>
          {/* User routes */}
          <Route path='/' element={<Home/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/feed' element={<Feedpage/>}/>
          <Route path='/profile' element={<Profilepage/>}/>
          <Route path='/chatbox' element={<Chatboxpage/>}/>
          <Route path='/gallery' element={<Gallerypage/>}/>
          <Route path='/courseview' element={<Courseviewpage/>}/>
          <Route path='/addCourse' element={<AddCourse/>}/>
          <Route path='/connections' element={<Connectionpage/>}/>
          <Route path='/otherprofile' element={<Otherprofilepage/>}/>
          <Route path='/courseList' element={<CourseListPage/>}/>
          {/* Admin routes */}
          <Route path='/admin' element={<Adminlogin/>}/>
          <Route path='/admindashboard' element={<Admindash/>}/>
          <Route path='/adminuserlist' element={<Adminuserlistpage/>}/>
          <Route path='/adminpostmanage' element={<Adminpostmanagepage/>}/>
          <Route path='/admininbox' element={<Admininboxpage/>}/>
          <Route path='/admincoursemanage' element={<Admincoursemanagepage/>}/>
          <Route path='/adminReportManage' element={<AdminReportManagepage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
