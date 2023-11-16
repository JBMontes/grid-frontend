import { Link } from "react-router-dom"
import "../styles/NavBar.css"

export default function NavBar(){

return(
 <div className="navBar">

   <Link to='/'><h1> The Grid</h1></Link> 

<button>New Task 📝</button>

 </div>
)
}