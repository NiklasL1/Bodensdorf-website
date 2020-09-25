import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Main from './Main';
import Imprint from './Imprint';
import UserManagementPage from '../UserManagementPage/UserManagementPage';
import BookingManagementPage from '../BookingManagementPage/BookingManagementPage';
// import StripeNew from '../Stripe/StripeNew';

function App() {
  return (
    <div className="App">           
      <Switch>
        <Route
          exact path="/impressum/"
          children={<Imprint />}
        />
        <Route
          exact path="/users/"
          children={<UserManagementPage />}
        />
        <Route
          exact path="/bookings/"
          children={<BookingManagementPage />}
        />
        <Route
          exact path="/"
          children={<Main />}
        />                  
      </Switch>
    </div>
  );
}

export default App;
