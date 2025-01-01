import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './services/Reducer/index.js';

// Create Redux store with Redux DevTools support
const store = createStore(
  rootReducer,
);

// Render the application
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
