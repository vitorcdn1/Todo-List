const modalReducer = (state=false, action) => {
    switch (action.type) {
        case "SHOW_MODAL":
            return true
        case "HIDDE_MODAL":
            return false
        default:
            return state
    }
}

const modalEditReducer = (state=[false, {}], action) => {
    switch (action.type) {
        case "SHOW_EDIT_MODAL":
            return [true, action.payload]
        case "HIDDE_EDIT_MODAL":
            return [false, action.payload]
        default:
            return state;
    }
}
const listReducer = (state=[], action) => {

    switch (action.type) {
        case "ADD_NEW_TASK":    // Adding a new Task
            return [...state, action.payload]

        case "DELETE_TASK":     // Delete a task based on the id
            return state.filter(task => task.id !== action.payload)
            
        case "CHANGE_STATE":        // To change the state by clicking (Each click change to next state ("Todo", "Doing", "Done"))

            let taskStates = ["Todo", "Doing", "Done"]
            let newState = state

            for (let task of newState) {
                if (task.id === action.payload) {
                    let position = taskStates.indexOf(task.state) + 1

                    if (position > 2) position = 0
                    task.state = taskStates[position]
                }
            }
            
            return [...newState]

        case "EDIT_TASK":
            
            return state;

        case "GET_SAVED_LIST":      // That case will get a saved list from the localStorage and dispatch for the reducer
            return [...action.payload]
            
        default:
            return state;
    }
}

export {
    modalReducer,
    modalEditReducer,
    listReducer
}