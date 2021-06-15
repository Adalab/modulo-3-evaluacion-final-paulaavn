import React, {useState, useEffect} from 'react';
import UserList from "./UserList";
import getApiData from '../services/api';
import ls from '../services/localStorage';
import '../stylesheets/App.css';

import logo from '../images/logo.png'

const App = () => {
  const [users, setUsers]= useState(ls.get('users',[]));
  
  useEffect(()=>{
    if (users.length === 0) {
      getApiData().then(usersData => {
        setUsers(usersData);
      });
    }
  },[]);

  useEffect(() => {
    ls.set('users', users);
  }, [users]);

 return(
   <>
   <div className="container">
  <img src= {logo} alt="logo" className="main_logo"/>
  <UserList users={users}/>
</div>
   </>
 ); 
};

export default App;

