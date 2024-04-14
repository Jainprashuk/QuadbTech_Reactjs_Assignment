import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store.js';
import Starter from './Components/Starter.jsx';


const StarterPage = () => {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    // Set showApp to true after 5 seconds
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 5000);

    // Clear timeout to avoid memory leaks
    return () => clearTimeout(timer);
  }, []); // Run only once on component mount

  return (
    <div>
      {showApp ? (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      ) : (
        <Starter/>
      )}
    </div>
  );
};

// Render the StarterPage component into the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <StarterPage />
);
