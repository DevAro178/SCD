// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './redux/store';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { Provider } from 'react-redux';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store'; // adjust the import path according to your project structure
import App from './App'; // adjust the import path according to your project structure

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);