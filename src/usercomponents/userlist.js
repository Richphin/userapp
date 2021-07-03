import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../actions/userAction";
import UserItem from "./Useritem";



function Userlist(props) {
    useEffect(()=>{
        props.getAllUsers();
    },[]);
    return(
        <div>
            {props.users.map((user) => (<UserItem user={user}  />))}
           
        </div>
    )
    
    
    
    }
    function mapStateToProps(state) {
        return {
            users:state.userState.users,
        }
    }
    const mapDispatchToProps = {
        getAllUsers,
      };
    export default  connect(mapStateToProps,mapDispatchToProps)(Userlist);