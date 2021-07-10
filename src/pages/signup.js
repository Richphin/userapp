import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signup } from '../actions/authActions'




function Signup(props) {
    const [credentials, setcredentials] = useState({email:"",password:""})
    function handleOnchange(event){
        setcredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        })
    }
    function handleOnsubmit(){
        props.signup(credentials.email,credentials.password)
    }

    //when firebase is loading
    //show loading
    if(props.auth.isLoaded === false){
        return<h1>Loading...</h1>;
    }
    //if a user is logged in
    //redirect user to dashboard
    if (props.auth.isEmpty === false) {
        return <Redirect path="/" />;
    }

    return (
        <div>
           <form>
               <div>
                   <label>Email</label>
                   <input type="email" name="email" value={credentials.email}  onChange={handleOnchange}/>
               </div>
               <div>
                   <label>Password</label>
                   <input type="password" name="password" value={credentials.password}  onChange={handleOnchange}/>
               </div>
               <button type="button" name="Submit" onClick={handleOnsubmit}>Signup</button>
         </form> 
        </div>
    )
}

const mapStateToProps=(state)=> {
    return {
        auth: state.firebaseState.auth,
    }
}
export default connect(mapStateToProps, {signup})(Signup)
