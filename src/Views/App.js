import logo from '../Assets/images/logo_ĐVT.gif';
//import LoginForm from '../Components/LoginForm';
import RegisterForm from '../Components/RegisterForm';
import './App.scss';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <RegisterForm></RegisterForm>
      </header>
    </div>
  );  
}

export default App;