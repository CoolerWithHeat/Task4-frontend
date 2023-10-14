import React from 'react';
import ReactDOM from 'react-dom/client';
import {SignUp_Page, AdminPanel, LoginPage} from './components'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/Admin' element={<AdminPanel/>} />
        <Route path='/SignUp' element={<SignUp_Page/>} />
      </Routes>
    </Router>
  </Provider>
);