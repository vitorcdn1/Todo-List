import { useDispatch, useSelector } from 'react-redux'
import { modalEditAction } from '../Actions/Action'
import { useEffect, useState } from 'react'

export default function Edit() {

    const [TaskText, setTaskText] = useState("")
    const dispatch = useDispatch()
    const modalState = useSelector(state => state.modalEdit)

    useEffect(() => {

        // This useEffect will 

        if (modalState[0]) {
            console.log("Showing the Edit modal for the first time ")
            setTaskText(modalState[1].text)
        }

        
    }, [modalState])

    function handleChange(event) {
        setTaskText(event.target.value)
    }

    function modalFunction(event) {
        if (event.target.id === "Modal") {
            dispatch(modalEditAction(false))
        }
    }

    function saveChanges() {
        console.log(modalState[1])

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