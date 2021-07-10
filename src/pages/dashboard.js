import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import Userform from '../usercomponents/form';
import Userlist from '../usercomponents/userlist';


function Dashboard(props) {
  function handleLogout(){
    props.logout()
}
    return (
        <div className="container">
          <button type="button" 
          name="Submit" 
          onClick={handleLogout}
          style={{backgroundColor:"tomato" , color:"white"}}
          >Logout</button>
      <div className="row">
        <div className="col-md-6 formcontainer" style={{ backgroundImage: "url(/images/barcelona-morning-sky.jpg)" }}>
          <Userform />
        </div>
        <div className="col-md-6">
          <h2 className="users">USER(S)</h2>
          <Userlist/>
        </div>
      </div>
    </div>
    )
}

export default  connect(null,{logout})(Dashboard)
