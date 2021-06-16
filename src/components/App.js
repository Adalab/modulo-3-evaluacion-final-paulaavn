import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import UserList from "./UserList";
import Filters from "./Filters";
import UserDetail from "./UserDetail";
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

 const renderUserDetail = (props) => {
   const routeUserId = parseInt(props.match.params.userId);
   const foundUser = users.find(user => {
     return user.id === routeUserId;
   });
   console.log('Router props', props.match.params.userId, foundUser);
   if (foundUser !== undefined){
    return <UserDetail user={foundUser}/>;
   }else{
     return <p className="not_found_text">Ups! Ese personaje no existe...</p>
   }
 
 };

 return(
   <>
    <div className="container">
    <img src= {logo} alt="logo" className="main_logo"/>
    <Switch>
      <Route exact path="/">
        <div className="container">
          <Filters handleFilter={handleFilter}/>
          <UserList users={filteredUsers}/>
        </div>
      </Route>
      <Route path="/user/:userId" render={renderUserDetail}>
        
      </Route>
    </Switch>
    </div>
   </>
 ); 
};

export default App;

