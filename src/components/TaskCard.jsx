export default function TaskCard({task}){
    
    let arr = []
    let date = task.deadline.split("T")
    arr.push(date[0])
 
    return(
        <div className="taskCard">
        
        <h2>Title: {task.title}</h2>
        <h2>Priority Level: {task.priority}</h2>
        <h2>Deadline: {arr}</h2>
        <h2>Complete: {task.completed ? "✅" : "❌"}</h2>
      

        </div>
    )
}