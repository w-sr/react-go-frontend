import React from 'react';

import 'bulma/css/bulma.css';

import { useAuth0 } from './contexts/auth0-context';
import Header from './components/Header';
import LoggedIn from './components/LoggedIn';

import './App.css';


function App() {
  const { isLoading, user } = useAuth0();

  return (
    <div>
      <Header />

      <div className="container">
        {!isLoading && user &&
          <LoggedIn />
        }
      </div>
    </div>
  );
}

export default App;