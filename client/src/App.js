import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer' 
import './App.css';

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
