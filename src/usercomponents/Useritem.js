function UserItem(props) {
    
    return(
        <div className="row useritem">
           <div className="col-md-2">{props.user.Username}</div>
           <div className="col-md-4">{props.user.Email}</div>
           <div className="col-md-2">{props.user.Country}</div>
           <div className="col-md-4 btn">
               <button className="updatebtn">Update</button>
               <button className="deletebtn">Delete</button>
           </div>
        </div>
    )
    
    
    
    }
    export default UserItem