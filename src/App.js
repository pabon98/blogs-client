import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Newsfeed from './Components/Newsfeed/Newsfeed';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar></Navbar>
       <Routes>
         <Route exact path="/" element={<Home></Home>} >
         </Route>
        <Route path="/home" element={<Home></Home>}>
        </Route>
        <Route path="/newsfeed" element={<Newsfeed></Newsfeed>}>
        </Route>
        <Route path="/contact" element={<Contact></Contact>}>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}>
          </Route>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
