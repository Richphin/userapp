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

function deleteuser(id) {
  let newUsers = users.filter((user) => user.id !==id);
  console.log(newUsers)
  setUsers(newUsers)
}
function updateuser(id, updatedUserInfo) {
  let newUsers = users.map((user) => {
    if (user.id ===id) {
      return updatedUserInfo;
    }
    return user;
  })
  setUsers(newUsers);
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 formcontainer" style={{ backgroundImage: "url(/images/barcelona-morning-sky.jpg)" }}>
          <Userform adduser={adduser}/>
        </div>
        <div className="col-md-6">
          <h2 className="users">USER(S)</h2>
          <Userlist allUsers={users} delete={deleteuser} updateuser={updateuser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
