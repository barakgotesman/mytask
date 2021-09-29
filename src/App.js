import logo from './logo.svg';
import './App.css';
// import Login from './componnents/login/login';
import LoginV2 from './componnents/loginv2/loginv2';
import LoginSuccess from './componnents/LoginSuccess/LoginSuccess';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState(1)

  return (
    <>
    {
      // page === 1 ? <Login setPage={setPage} /> : null
      page === 1 ? <LoginV2 setPage={setPage} /> : null
    }
    {
      page === 2 ? <LoginSuccess setPage={setPage} /> : null

    }
    </>
  );
}

export default App;
