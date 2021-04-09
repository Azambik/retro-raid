import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer' 
import Home from './components/Home';
import Forum from './components/Forum';
import Signup from './components/Signup';
import Login from './components/Login';
import Help from './components/Help';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
//import { StoreProvider } from './utils/GlobalState';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authortization: token ? `BEarer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
})

function App() {
  const [pages] = useState([
      {name: 'Home'},
      {name: 'Forum'},
      {name: 'New Character'},
      {name: 'Sign In'},
      {name: 'Help!'}
  ]);

  const [currentPage, setCurrentPage] = useState('Home');

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
      case 'Help!':
        return <Help />;
      default:
        return <Home />;      
    }
  }
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>  
  );
}

export default App;
