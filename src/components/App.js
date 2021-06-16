import React, {useState, useEffect} from 'react';
import UserList from "./UserList";
import Filters from "./Filters";
import getApiData from '../services/api';
import ls from '../services/localStorage';
import '../stylesheets/App.css';

import logo from '../images/logo.png'

const App = () => {
  const [users, setUsers]= useState(ls.get('users',[]));
  const [filterName, setFilterName] = useState(ls.get('filterName', ''));
  
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

  const handleFilter = (data) =>{
    if(data.key === "name"){
      setFilterName(data.value);
    }
  };

 const filteredUsers = users.filter((user) =>{
   return user.name.toLowerCase().includes(filterName.toLowerCase());
 });

 return(
   <>
   <div className="container">
  <img src= {logo} alt="logo" className="main_logo"/>
  <Filters handleFilter={handleFilter}/>
  <UserList users={filteredUsers}/>
</div>
   </>
 ); 
};

export default App;

