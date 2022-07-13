import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Main from './Views/main'

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path={'/'} component={Main}/>
          {/* <Route exact path={'/aboutme'} component={AboutMe}/>
          <Route exact path={'/projects'} component={Projects}/>
          <Route exact path={'/contact'} component={Contact}/> */}
        </Routes>
    </Router>
  );
}

export default App;
