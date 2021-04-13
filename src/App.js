import logo from './logo.svg';
import './App.css';
import Userform from './usercomponents/form';
import Userlist from './usercomponents/userlist';
import { useState } from 'react';

function App() {
  const [users,setUsers]=useState([]);

function adduser(user) {
  setUsers([
    ...users,user
  ])
  
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 formcontainer" style={{ backgroundImage: "url(/images/barcelona-morning-sky.jpg)" }}>
          <Userform adduser={adduser}/>
        </div>
        <div className="col-md-6">
          <h2 className="users">USER(S)</h2>
          <Userlist allUsers={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
