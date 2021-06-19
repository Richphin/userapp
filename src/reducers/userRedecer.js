 const initialState = {
     users : []
 };

const usersReducer =(state = initialState,action) => {
    switch (action.type) {
        case "ADD_ALL_USERS":
            let users = action.payload;
            return { users: users };

        case "ADD_USER":
            console.log(action.payload)
            return {...state, users: [...state.users, action.payload] }
        
        case "DELETE_USER":
            var id= action.payload
            var newUsers = state.users.filter((user) => user.id !==id);
            console.log(newUsers)
  
        return{ users:newUsers};

        case "UPDATE_USER":
            var id =action.payload.id;
            let updatedUserInfo = action.payload.updatedUserInfo;
            let UserAfterUpdate=state.users.map((user) => {
                if (user.id ===id) {
                  return updatedUserInfo;
                }
                return user;
              });
              
                
                return{users: UserAfterUpdate};
        default:
            return state;
    }
}

export default usersReducer;