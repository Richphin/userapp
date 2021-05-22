import { connect } from "react-redux";
import UserItem from "./Useritem";


function Userlist(props) {
    
    return(
        <div>
            {props.users.map((user) => (<UserItem user={user} delete={props.delete} updateuser={props.updateuser}/>))}
           
        </div>
    )
    
    
    
    }
    function mapStateToProps(state) {
        return {
            users:state.users,
        }
    }
    export default  connect(mapStateToProps,{})(Userlist);