import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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

    return (
        <div className="OuterDetail">

            <div className="detail">
                <h3>{list.title}</h3>
                <h3>{list.priority}</h3>
                <h3>{list.description}</h3>
                <h3>{list.deadline}</h3>
                <h3>{list.completed ? "✅" : "❌"}</h3>
                <h3>{list.category}</h3>
            </div>
            <div className="buttons">
                <button onClick={handleDelete}>Delete</button>
            </div>


        </div>
    )

}