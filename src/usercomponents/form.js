import { useState } from "react"

function Userform(props) {
    const [state,setstate] =useState({
        Username:"",
        Email:"",
        Country:"",
        Password:"",
    })

    function handleonChange(event) {
        setstate({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    function handleonSubmit() {
        props.adduser(state);
    }

return(
    <div>
        <h2 className="signup form">SIGN UP</h2>
        <div className="row" className="form">
            <label className="formlabel">Username</label><br/>
            <input type="text" name="Username" value={state.Username} onChange={handleonChange} className="inputfield"/>
        </div>
        <div className="row" className="form">
            <label className="formlabel">Email</label><br/>
            <input type="Email" name="Email" value={state.Email} onChange={handleonChange} className="inputfield"/>
        </div>
        <div className="row" className="form">
            <label className="formlabel">Country</label><br/>
            <input type="text" name="Country" value={state.Country} onChange={handleonChange} className="inputfield"/>
        </div>
        <div className="row" className="form">
            <label className="formlabel">Password</label><br/>
            <input type="password" name="Password" value={state.Password} onChange={handleonChange} className="inputfield"/>
        </div><br/>
        <div className="row" className="form">
            <button type="Submit" name="Submit" onClick={handleonSubmit} className="createbtn">Create User</button>
        </div>
    </div>
)



}
export default Userform