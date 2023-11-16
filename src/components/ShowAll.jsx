import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import Grid from "./Grid";
import '../styles/ShowAll.css'

import Priority1 from "./PriorityOne";
import Priority2 from "./PriorityTwo";
import Priority3 from "./PriorityThree";
import Priority4 from "./PriortyFour";

export default function ShowAll(){

    let [list, setList] = useState([])
const API = import.meta.env.VITE_API_URL;

useEffect(() => {
    fetch(`${API}/grid`)
        .then((response) => response.json())
        .then((responseJSON) => setList(responseJSON))
        .catch((error) => console.error(error));
});

    return(
        <div className="showAll">

            <div className="list">
        {list.map((task)=> {

            return (
            <>
            <TaskCard key={task.id} task={task}/>
            <Priority1 task={task} />
            <Priority2 task={task} />
            <Priority3 task={task}/>
            <Priority4 task={task}/>
                    
            </>
            )
        })}

            </div>

        </div>
    )
}