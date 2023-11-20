import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../styles/TaskForm.css'
const API = import.meta.env.VITE_API_URL;

export default function TaskForm() {

    const navigate = useNavigate();

    const [list, setList] = useState({

        title: "",
        priority: 0,
        description: "",
        deadline: "",
        completed: false,
        category: "",

    })

    const addList = () => {

        fetch(`${API}/grid`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(list),
        })
            .then(() => {
                navigate(`/grid`);
            })
            .catch((error) => console.error("catch", error));
    };

    const handleTextChange = (event) => {
        setList({ ...list, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setList({ ...list, completed: !list.completed });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addList();
    }


    return (
        <div className="new">
            <div className="formBody">
                <form onSubmit={handleSubmit} className="newForm">
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        value={list.title}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Title of List"
                        required
                    />

                    <label htmlFor="priority">Priority:</label>
                    <input
                        id="priority"
                        value={list.priority}
                        type="number"
                        min={1}
                        max={4}
                        onChange={handleTextChange}
                        placeholder="Priority Level 1 - 4"
                        required
                    />

                    <label htmlFor="description">Description:</label>
                    <input
                        id="description"
                        value={list.description}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Desciprion of Task"
                        required
                    />


                    <label htmlFor="deadline">Deadline:</label>
                    <input
                        id="deadline"
                        value={list.deadline}
                        type="date"
                        onChange={handleTextChange}
                        placeholder="Deadline Date"
                        required
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        id="category"
                        value={list.category}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Category"
                        required
                    />
                    <label htmlFor="completed">Completed:</label>
                    <input
                        id="completed"
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        checked={list.completed}
                    />


                    <div className="submitButton">
                        <Link to={`/grid`} className="newLink" style={{ margin: '0', padding: '0' }}>
                            <button>↩︎</button>
                        </Link>
                        <button type="submit" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}