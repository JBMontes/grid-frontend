import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../styles/Edit.css";

const API = import.meta.env.VITE_API_URL;

export default function Edit() {

    const navigate = useNavigate();
    let { id } = useParams();
    const [list, setList] = useState({
        title: "",
        priority: 0,
        description: "",
        deadline: "",
        completed: false,
        category: "",

    })

    useEffect(() => {
        fetch(`${API}/grid/${id}`)
            .then((response) => response.json())
            .then((responseJSON) => setList(responseJSON))
            .catch(() => navigate("/not-found"));
    }, [id, navigate]);

    const update = () => {
   
        fetch(`${API}/grid/${id}`, {
            method: "PUT",
            body: JSON.stringify(list),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
                navigate(`/grid/${id}`);
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
        update();
    }


    return (
        <div className="edit">
            <div className="formBody">
                <form onSubmit={handleSubmit} className="editForm">
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

                    <label htmlFor="completed">Completed:</label>
                    <input
                        id="completed"
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        checked={list.completed }
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

                    <div className="submitButton">
                        <button type="submit" >Submit</button>
                        <Link to={`/grid/${id}`} className="newLink" style={{ margin: '0', padding: '0' }}>
                            <button>↩︎</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}