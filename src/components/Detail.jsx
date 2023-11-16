import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/Detail.css'

const API = import.meta.env.VITE_API_URL;

export default function Detail() {

    const [list, setList] = useState({ title: "", });

    let navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        fetch(`${API}/grid/${id}`)
            .then((response) => response.json())
            .then((responseJSON) => setList(responseJSON))
            .catch(() => navigate("/not-found"));
    }, [id, navigate]);

    const handleDelete = () => {
        fetch(`${API}/grid/${id}`, { method: "DELETE" })
            .then(() => {
                navigate(`/grid`);
            })
            .catch((error) => console.error(error));
    }

    console.log(list)
    return (
        <div className="OuterDetail">

            <div className="detail">
                <h3>Title: {list.title}</h3>
                <h3>Priority Level: {list.priority}</h3>
                <h3>Description: {list.description}</h3>
                <h3>Deadline: {list.deadline}</h3>
                <h3>Completed: {list.completed ? "✅" : "❌"}</h3>
                <h3> Category: {list.category}</h3>
            <div className="buttons">
                <button onClick={handleDelete}>Delete</button>
               <Link to='/grid'> <button>↩︎</button></Link>
               
               <Link to={`/grid/${id}/edit`}><button>Edit</button></Link>
            </div>
            </div>


        </div>
    )

}