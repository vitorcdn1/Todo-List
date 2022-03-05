import { useSelector, useDispatch } from "react-redux"
import { listAction } from "../Actions/Action"

export default function Main() {

    const listState = useSelector(state => state.list)
    const dispatch = useDispatch()

    function deleteTask(event) {

        // Function that delete a task based on the id

        dispatch(listAction("DELETE_TASK", Number(event.target.getAttribute("taskid"))))
    }

    function changeTaskState(event) {
        
        // Function that changes the state of the task (Todo, Doing, Done)

        dispatch(listAction("CHANGE_STATE", Number(event.target.getAttribute("taskid"))))
    }

    return (
        <div className="Main">

            {listState.length === 0 ? (             // If the task List is Empty will return 

                <div className="EmptyContainer">
                    <h1 id="EmtpyText">The Task List Is Empty</h1>

                    <h3>Please Add Some Task!!</h3>
                </div>

            ) : (                                   // If the task list isn't empty

                <div className="ListContainer">
                    {listState.map(task => (
                        <div className="TaskContainer" key={String(task.id)}>
                            <h1>{task.text}</h1>

                            <div className="ControlButton">
                                <button taskid={task.id} onClick={deleteTask} id="ButtonDelete">DELETE</button>
                                <button taskid={task.id} id="ButtonEdit">Edit</button>
                                <button taskid={task.id} onClick={changeTaskState} id={`Button${task.state}`}>{task.state}</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
