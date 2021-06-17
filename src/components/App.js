import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import getApiData from '../services/api';
import ls from '../services/localStorage';
import '../stylesheets/App.css';


import logo from '../images/logo.png'
import CharacterList from './CharacterList';

const App = () => {
  const [users, setUsers]= useState(ls.get('users',[]));
  const [filterName, setFilterName] = useState(ls.get('filterName', ''));
  const [filterSpecies, setFilterSpecies] = useState(ls.get('filterSpecies', ''));
  
  useEffect(()=>{
    //Se ejecuta al arrancar la página
    if (users.length === 0) {
      getApiData().then(usersData => {
        setUsers(usersData);
      });
    }
  },[]);

  useEffect(() => {
    ls.set('users', users);
  }, [users]);
  
  useEffect(() => {
    ls.set('filterName', filterName);
  }, [filterName]);

  const handleFilter = (data) =>{
    if(data.key === "name"){
      setFilterName(data.value);
    }else if (data.key === "species"){
      setFilterSpecies(data.value);
    }
    // else{
    //   return <h2 className="text_ups_details">Ups! ese personaje no existe...</h2>
    // }
  };

 const filteredUsers = users
 .filter((user) =>{
   return user.name.toLowerCase().includes(filterName.toLowerCase());
 })
 .filter(user => {
   if (filterSpecies === ""){
     return true;
   }else{
   return user.species === filterSpecies;
   };
 });

 const renderUserDetail = (props) => {
   const routeUserId = parseInt(props.match.params.userId);
   const foundUser = users.find(user => {
     return user.id === routeUserId;
   });
   console.log('Router props', props.match.params.userId, foundUser);
   if (foundUser !== undefined){
    return <CharacterDetail user={foundUser}/>;
   }
 
 };

 return(
   <>
    <div className="container">
    <img src= {logo} alt="logo" className="main_logo"/>
    <Switch>
      <Route exact path="/">
        <div className="container">
          <Filters 
          filterName={filterName}
          filterSpecies={filterSpecies}
          handleFilter={handleFilter}
          />
          <CharacterList 
          filterName={filterName}
          users={filteredUsers}/>
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

