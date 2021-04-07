import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer' 
import Home from './components/Home';
import Forum from './components/Forum';
import Signup from './components/Signup';
import Login from './components/Login';
import Help from './components/Help';
import './App.css';
//import { StoreProvider } from './utils/GlobalState';

function App() {
  const [loginSelected, setLoginSelected] = useState(false);
  const [pages] = useState([
      {name: 'Home'},
      {name: 'Forum'},
      {name: 'New Character'},
      {name: 'Sign In'},
      {name: 'Help me!'}
  ]);

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'Home':
        return <Home />;
      case 'Forum':
        return <Forum />;
      case 'New Character':
        return <Signup />;
      case 'Sign In':
        return <Login />  
      case 'Help me!':
        return <Help />;    
    }
  }
  return (
    <div>
      <Header
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <main>
        { renderPage(currentPage) }
      </main>
      <Footer/>    
    </div>
  );
}

export default App;
