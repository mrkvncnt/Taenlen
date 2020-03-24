import React, { useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Login from './Login';
import Register from './Register';
import Widgets from './Widgets';

const Dashboard = () => {
  const [form, setForm] = useState('login');
  const loggedIn = localStorage.getItem('token') ? true : false;
  
  const generateForms = () => {
    switch (form) {
      case 'login':
        return <Login setForm={setForm} />;

      case 'register':
        return <Register setForm={setForm} />;

      default:
        return <Login />;
    }
  };

  const generateContent = () => {
    switch (loggedIn) {
      case true:
        return <Widgets />;

      case false:
        return generateForms();

      default:
        generateForms();
    }
  };

  return (
    <div className="container">

      <Nav loggedIn={loggedIn} />

      <main>
        {generateContent()} 
      </main>

      <span className="footnote">1.  <i>noun, welsh [taen·llen]</i>: A spreadsheet.</span>

      <Footer />
    </div>

  );
};

export default Dashboard;

