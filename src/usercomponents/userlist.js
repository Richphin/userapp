import UserItem from "./Useritem";

function Userlist(props) {
    
    return(
        <div>
            {props.allUsers.map((user) => (<UserItem user={user}/>))}
           
        </div>
    )
    
    
    
    }
    export default Userlist