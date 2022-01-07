import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Newsfeed from './Components/Newsfeed/Newsfeed';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration'
import AuthProvider from './Contexts/AuthProvider';
import Dashboard from './Components/Dashboard/Dashboard';
import Addpost from './Components/AddPost/Addpost';
import MyPost from './Components/MyPost/MyPost';
import ManagePost from './Components/Dashboard/ManagePost/ManagePost';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
       <Routes>
         <Route  path="/" element={<Home></Home>} >
         </Route>
        <Route path="/home" element={<Home></Home>}>
        </Route>
        <Route path="/login" element={<Login></Login>}>
        </Route>
        <Route path="/registration" element={<Registration></Registration>}>
         </Route>
         <Route path="/dashboard" element={<PrivateRoute>
          <Dashboard></Dashboard>
         </PrivateRoute>}>
           <Route  path="addpost" element={<Addpost></Addpost>}></Route>
           <Route path="mypost" element={<MyPost></MyPost>}></Route>
           <Route  path="manageposts" element={<ManagePost></ManagePost>}>
           </Route>
           <Route  path="makeadmin" element={<MakeAdmin></MakeAdmin>}>
           </Route>
         </Route>
        <Route path="/newsfeed" element={<PrivateRoute>
          <Newsfeed></Newsfeed>
        </PrivateRoute>}>
        </Route>
        
        <Route path="/contact" element={<Contact></Contact>}>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}>
          </Route>
       </Routes>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
