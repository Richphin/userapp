import { useState } from "react"
import { Modal, ModalBody } from "react-bootstrap"
import Edituserform from "./EditUserForm"

function UserItem(props) {
    const [displaymodal,setshowmodal] =useState(false);
    function showModal() {
        setshowmodal(true);
    }

    function hideModal() {
        setshowmodal(false);
    }
    
    return(
        <div className="row useritem">
           <div className="col-md-2">{props.user.Username}</div>
           <div className="col-md-4">{props.user.Email}</div>
           <div className="col-md-2">{props.user.Country}</div>
           <div className="col-md-4 btn">
               <button className="updatebtn" onClick={showModal} >Edit</button>
                <Modal show={displaymodal} onHide={hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Edituserform
                            user={props.user}
                            updateuser={props.updateuser}
                            hideModal={hideModal}
                        />
                    </Modal.Body>


                </Modal>
                



               <button className="deletebtn" onClick={() => {props.delete(props.user.id)}}>Delete</button>
           </div>
        </div>
    )
    
    
    
    }
    export default UserItem