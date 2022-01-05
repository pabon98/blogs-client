import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route exact path="/" element={<Home></Home>} >
         </Route>
        <Route path="/home" element={<Home></Home>}>
        </Route>
        
       </Routes>
     </Router>
    </div>
  );
}

export default App;
