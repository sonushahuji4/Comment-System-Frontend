import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import GlobalContextProvider from './context/GlobalContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);