import React from 'react'

export function addUser(newUser) {
    return {
        type: "ADD_USER",
        payload: newUser,
    }
}


export  function deleteUser(id) {
     
     return{
        type:"DELETE_USER",
        payload: id
     }
 }
 
 export  function updateUser(id,updateduser) {
     
    return{
       type:"UPDATE_USER",
       payload:{id:id, updatedUserInfo:updateduser}
    }
}
 
