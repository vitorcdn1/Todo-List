import { useDispatch } from "react-redux"
import { modalAction } from "../Actions/Action"


export default function Header() {

    const dispatch = useDispatch()

    function ShowModal() {
        dispatch(modalAction(true))
    }

    return (
        <header>
            <h1>To-do List</h1>

            <button id="ButtonShowModal" onClick={ShowModal}>+</button>
        </header>
    )
}