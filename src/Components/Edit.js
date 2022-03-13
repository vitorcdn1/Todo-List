import { useDispatch, useSelector } from 'react-redux'
import { listAction, modalEditAction } from '../Actions/Action'
import { useEffect, useState } from 'react'

export default function Edit() {

    const [TaskText, setTaskText] = useState("")        // The hook with the value updated
    const dispatch = useDispatch()
    const modalState = useSelector(state => state.modalEdit)

    useEffect(() => {

        // This useEffect will set the TaskText hook to change the value of the input

        if (modalState[0]) {
            console.log("Showing the Edit modal for the first time ")
            setTaskText(modalState[1].text)
        }

        
    }, [modalState])

    function handleChange(event) {

        // Function To change The hook every time that the input changes

        setTaskText(event.target.value)
    }

    function modalFunction(event) {

        // Function That Close The Modal When you Click outside The Modal

        if (event.target.id === "Modal") {
            dispatch(modalEditAction(false, {}))
        }
    }

    function saveChanges() {
        
        // Function That Save The Changes Writed In the Edit Modal Input

        if (TaskText !== "") {

            let updatedTask = modalState[1]
            updatedTask.text = TaskText

            dispatch(listAction("EDIT_TASK", updatedTask))  // Updateding The Task
            dispatch(modalEditAction(false, {}))            // Closing The Edit Modal
            
        } else {

            alert("Please Type Something in The Input !!!")
        }

    }

    return (
        <div className={modalState[0] ? "Modal" : "Hidde"} id="Modal" onClick={modalFunction}>
            <div className="FormInputContainer">
                <h1 id="ModalText">Edit Task</h1>

                <div className="InputFormContainer">
                    <input type="text" onChange={handleChange} placeholder="Edit The Task ..." value={TaskText} />

                    <button id="ButtonAddNewTask" onClick={saveChanges} >Save Changes</button>
                </div>
            </div>
        </div>
    )
}