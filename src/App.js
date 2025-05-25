// import logo from './logo.svg';
// import './App.css';
// import Home from './Components/pages/Home';
// import Login from './Components/pages/Login';
// import Register from './Components/pages/Register';
// import About from './Components/pages/About';
// import Contact from './Components/pages/Contact';
// function App() {
//   return (
//     // <Login/>
//     // <Register/>
//     // <About/>
//     // <Contact/>
//   );
// }

// export default App;

//=================== (new method ) =====================================>

import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Register from "./Components/pages/Register";
import Login from "./Components/pages/Login";
import Contact from "./Components/pages/Contact";
function App() {
  return (
<BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    {/* <Route path='/feedback' element={<Feedback/>}/> */}
    <Route path='/register' element={<Register/>}/>
    
   </Routes>  
</BrowserRouter>
  );
}

export default App;
