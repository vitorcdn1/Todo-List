import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { modalAction, listAction } from '../Actions/Action'

export default function Modal() {

    const [TaskText, setTaskText] = useState("")                // The hook to get the list

    const modalState = useSelector(state => state.modal)        // Modal state that return a boolean
    const taskList = useSelector(state => state.list) 
    const dispatch = useDispatch()

    useEffect(() => {   // This useEffect will get the saved List from the localStorage and then dispatch to the list reducer

        let localStorageContent = localStorage.getItem("taskList")
        
        if (localStorageContent) { dispatch(listAction("GET_SAVED_LIST", JSON.parse(localStorageContent))) }

    }, [dispatch])

    useEffect(() => {       // This useEffect Will save in the localStorage everytime that the taskList hook change
        
        localStorage.setItem("taskList", JSON.stringify(taskList))
        
    }, [taskList])


    function modalFunction(event) {

        // Function that close the modal if you click outside the form inside the modal

        if (event.target.id === "Modal") {
            dispatch(modalAction(false))
        }
    }

    function handleChange(event) {

        // Function that change the hook of the TaskText to be used in the addTask function

        setTaskText(event.target.value)
    }

    function addTask() {

        // Create the task object with a id to dispatch into the list

        let task = { 
            text: TaskText,
            id: Number(String(Math.random()).slice(2)),
            state: "Todo"
        }
        
        // Adding the task to the reducer list

        dispatch(listAction("ADD_NEW_TASK", task))      

        // Closing the modal and cleaning the input of the modal

        dispatch(modalAction(false))
        setTaskText("")

    }

    return (
        <div className={modalState ? "Modal" : "Hidde"} id="Modal" onClick={modalFunction}>
            <div className="FormInputContainer">
                <h1 id="ModalText">Add New Task</h1>

                <div className="InputFormContainer">
                    <input type="text" onChange={handleChange} placeholder="Write a new Task ..." value={TaskText} />

                    <button id="ButtonAddNewTask" onClick={addTask}>Add Task</button>
                </div>
            </div>
        </div>
    )
}