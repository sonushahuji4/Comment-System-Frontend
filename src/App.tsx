import './styles/App.scss';
import { useContext } from 'react';
import LoginPage from './components/shared/loginPage';
import Home from './components/shared/home';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const clientId = '894720398292-60h39t5cbgnk1ens4p7p21mtgrb3fmk9.apps.googleusercontent.com';
  const credential: any = JSON.parse(sessionStorage.getItem("customer") || '{}');

  return (
    <div className="App">
      {
        credential?.isLoggedIn ? 
          <Home></Home> 
        : 
        <GoogleOAuthProvider clientId={clientId}>
          <LoginPage></LoginPage>
        </GoogleOAuthProvider>
      }
    </div>
  );
}
export default App;
