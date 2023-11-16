import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
// import Grid from "./Grid";
import '../styles/ShowAll.css'

export default function ShowAll(){

    let [list, setList] = useState([])
    const API = import.meta.env.VITE_API_URL;

useEffect(() => {
    fetch(`${API}/grid`)
        .then((response) => response.json())
        .then((responseJSON) => setList(responseJSON))
        .catch((error) => console.error(error));
},[API]);




    return(
        <div className="showAll">

            <div className="list">

        { list.sort((a,b)=> b.priority - a.priority )
        .map((task)=> 
        <div key={task.id}
        className={`task-card priority-${task.priority}`}
        >
            <TaskCard  task={task}/>
        </div>
        )}

            </div>

        </div>
    )
}