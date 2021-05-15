 const initialState = {
     users : [{name: "richard", userId:"77628892908920", gender: "male"}]
 };

const usersReducer =(state = initialState,action) => {
    switch (action.type) {
        case "ADD_USER":
            
            break;
    
        default:
            return state;
    }
}

export default usersReducer;