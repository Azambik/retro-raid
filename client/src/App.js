import React, { useState } from 'react';
import Header from './components/Header' 
import Home from './components/Home';
import Forum from './pages/Forum.js';
import Signup from './components/Signup';
import Login from './components/Login';
import Help from './components/Help';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { StoreProvider } from './utils/Globalstate';



const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authortization: token ? `Bearer ${token}` : ''
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
      <StoreProvider>
        <Header
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <main>
          { renderPage(currentPage) }
        </main>  
        </StoreProvider>
    </ApolloProvider>  
  );
}

export default App;
