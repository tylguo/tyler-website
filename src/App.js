import logo from './logo.svg';
import './App.css';
import { Home } from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutMe } from './components/aboutMe';
import { Error } from './components/error';
import { Header } from './components/header';
import { MyProjects } from './components/myProjects';
import { OtherWebsites } from './components/otherWebsites';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutme' element={<AboutMe/>}/>
            <Route path='/myprojects' element={<MyProjects/>}/>
            <Route path='/otherwebsites' element={<OtherWebsites/>}/>
            <Route path='/*' element={<Error/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
