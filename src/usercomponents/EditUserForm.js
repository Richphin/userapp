import react, { useState } from "react"

function Edituserform(props) {
    const [state,setstate] =useState({
        Username: props.user.Username,
        Email: props.user.Email,
        Country: props.user.Country,
        Password: props.user.Password
    })

    function handleonChange(event) {
        setstate({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    function handleonSubmit() {
        
        let user = { ...state, id: props.user.id};
        props.updateuser(props.user.id, user);
        props.hideModal();
    }

return(
    <div>
        <div className="row" className="form">
            <label className="">Username</label><br/>
            <input type="text" name="Username" value={state.Username} onChange={handleonChange} className="inputfield"/>
        </div>
        <div className="row" className="form">
            <label className="">Email</label><br/>
            <input type="Email" name="Email" value={state.Email} onChange={handleonChange} className="inputfield"/>
        </div>
        <div className="row" className="form">
            <label className="">Country</label><br/>
            <input type="text" name="Country" value={state.Country} onChange={handleonChange} className="inputfield"/>
        </div>
        <div className="row" className="form">
            <label className="">Password</label><br/>
            <input type="password" name="Password" value={state.Password} onChange={handleonChange} className="inputfield"/>
        </div><br/>
        <div className="row" className="form">
            <button type="Submit" name="Submit" onClick={handleonSubmit} className="createbtn">Update</button>
        </div>
    </div>
)



}
export default Edituserform;