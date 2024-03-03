import logo from '../Assets/images/logoNTTandSlogan.gif';
import RegisterForm from '../Components/RegisterForm';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Welcome to NT Tech, signup account for use our services, please!</p>
      </header>
      <div className="App-content">
          <div className="App-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="App-form-container">
            <RegisterForm></RegisterForm>
          </div>
        </div>
    </div>
  );
}

export default App;
