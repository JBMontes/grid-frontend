import { Link } from "react-router-dom"
export default function TaskCard({ task }) {

    let arr = []
    let date = task.deadline.split("T")
    arr.push(date[0])

    return (
        <div className="taskCard">

            <Link to={`/grid/${task.id}`}><h2 className='title'>Title: {task.title}</h2></Link>
            <h2>Priority Level: {task.priority}</h2>
            <h2>Deadline: {arr}</h2>
            <h2>Complete: {task.completed ? "✅" : "❌"}</h2>


        </div>
    )
}