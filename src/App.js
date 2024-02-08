import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/SignIn_SignUp/usersForm';
import UserData from './components/usersData/userData';
import LoginBox from './components/SignIn_SignUp/loginBox';
import NavBar from './components/navBar';
import LoginMe from './components/SignIn_SignUp/loginMe';

function App() {
  return (
    <main>
      <Router>
        <NavBar />
      <div className='app-title-container'> 
        <h1>Welcome to the users test App</h1>
      </div>
      <Routes>
        <Route exact path='/login' element={<LoginBox />} />
        <Route exact path='/signup' element={<UserForm />} />
        <Route exact path='/users' element={<UserData />} />
        <Route exact path='/me' element={<LoginMe />} />
      </Routes>




      </Router>
    </main>
  );
}

export default App;
